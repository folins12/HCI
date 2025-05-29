class NurseriesController < ApplicationController
  before_action :set_nursery, only: [:show, :edit_image, :update_image, :update]
  before_action :set_user, only: [:update, :verify_otp]

  def index
    @nurseries = params[:query].present? ? Nursery.search(params[:query]) : Nursery.order(:position)
    @max_id = Nursery.maximum(:id)
  end

  def show
    rescue ActiveRecord::RecordNotFound
    flash[:alert] = "Nursery not found."
    redirect_to nurseries_path
  end

  def new
    @nursery = Nursery.new
  end

  def create
    @nursery = Nursery.new(nursery_params)

    validate_nursery(@nursery)

    if @nursery.errors.empty?
      session[:otp_nursery_data] = nursery_params.slice('name','number','email','address','location','open_time','close_time','description')
      redirect_to register_verify_otp_path
    else
      # Aggiungi il messaggio di errore specifico per l'email
      if @nursery.errors[:email].include?("Invalid domain. Please use an acceptable domain.")
        @nursery.errors.add(:email, "Please enter an email address with a valid domain.")
      end
      render :new
    end
  end

  def update
    if valid_address_updpro? && nursery_update_valid?
      if @user.otp_required_for_login
        otp_code = @user.generate_otp
        UserMailer.otp_email(@user.email, @user.nome, otp_code, 'vivaio').deliver_now
        session[:pending_nursery_params] = nursery_params.to_h
        session[:otp_user_id] = @user.id
        session[:otp_for] = 'vivaio'
        redirect_to login_verify_otp_path and return
      else
        @nursery.update(nursery_params)
        flash[:notice] = "Information updated successfully."
        redirect_to nursery_profile_path and return
      end
    else
      flash.now[:alert] = @nursery.errors.full_messages.join(', ')
      render 'nursery_profile/profile'
    end
  end

  def edit_image
    @nursery = Nursery.find(params[:id])
  end

  def update_image
    @nursery = Nursery.find(params[:id])
    if params[:nursery].nil? || params[:nursery][:nursery_image].nil?
      flash[:error] = "Missing parameters"
      redirect_to nursery_profile_path and return
    end

    if @nursery.update(nursery_image_params)
      redirect_to nursery_profile_path, notice: 'Image updated successfully.'
    else
      render :edit_image
    end
  end

  private

  def send_otp_email(user, otp_code, purpose)
    UserMailer.otp_email(user.email, user.nome, otp_code, purpose).deliver_now
  end

  def validate_nursery(nursery)
    number_str = nursery.number.to_s

    if number_str.blank? || number_str.length != 10
      nursery.errors.add(:number, "The phone number entered is not valid. It must be 10 digits.")
      nursery.number = ''
    elsif Nursery.exists?(number: number_str)
      nursery.errors.add(:number, "This number already belongs to another nursery, therefore it cannot be used!")
      nursery.number = ''
    end

    if !valid_time?(nursery.open_time) || !valid_time?(nursery.close_time)
      nursery.errors.add(:base, "The time entered is invalid. It must be between 0 and 24.")
      nursery.open_time = ''
      nursery.close_time = ''
    elsif nursery.open_time.to_i >= nursery.close_time.to_i
      nursery.errors.add(:base, "The time slot entered is not acceptable.")
      nursery.open_time = ''
      nursery.close_time = ''
    end

    if nursery.address.blank?
      nursery.errors.add(:address, "To continue you need to enter the address")
      nursery.address = ''
    else
      unless valid_address?(nursery.address)
        nursery.errors.add(:address, "The address entered is not valid.")
        nursery.address = ''
      end
    end
  end

  def valid_time?(time_str)
    time = time_str.to_i
    time.between?(0, 24)
  end

  def valid_address?(address)
    results = geo(address)
    if results.present? && results.first.coordinates.present?
      return true
    else
      return false
    end
  end

  def set_nursery
    @nursery = Nursery.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    flash[:alert] = "The requested nursery was not found."
    redirect_to nurseries_path
  end

  def nursery_params
    params.require(:nursery).permit(:name, :number, :email, :address, :location, :open_time, :close_time, :description)
  end

  def nursery_image_params
    params.require(:nursery).permit(:nursery_image)
  end

  def set_user
    @user = current_user
  end

  def valid_address_updpro?
    results = geo(params[:nursery][:address])
    if results.present? && results.first.coordinates.present?
      true
    else
      @nursery.errors.add(:address, 'The address entered is incorrect!')
      false
    end
  end

  def geo(address)
    Geocoder.search(address)
  end

  def nursery_update_valid?
    number = params[:nursery][:number].to_s.strip
    unless number.length == 10 && number.match?(/\A\d{10}\z/)
      @nursery.errors.add(:number, 'The phone number must be exactly 10 digits long.')
      return false
    end

    open_time = params[:nursery][:open_time].to_i
    close_time = params[:nursery][:close_time].to_i

    if open_time < 0 || open_time > 24 || close_time < 0 || close_time > 24
      @nursery.errors.add(:base, 'The time entered is invalid. Must be between 0 and 24.')
      return false
    end

    if open_time >= close_time
      @nursery.errors.add(:base, 'The time slot entered is invalid.')
      return false
    end

    if @nursery.description.blank?
      @nursery.errors.add(:description, 'Description cannot be empty.')
      return false
    end

    true
  end

  def clear_temporary_session_data
    session.delete(:pending_nursery_params)
    session.delete(:otp_user_id)
    session.delete(:otp_for)
  end

  def load_nursery_data
    return unless current_user

    nursery_ids = Nursery.where(id_owner: current_user.id).pluck(:id)
    nursery_plant_ids = NurseryPlant.where(nursery_id: nursery_ids).pluck(:id)

    @myplants = Plant.joins(:nursery_plants)
                     .where(nursery_plants: { id: nursery_plant_ids })
                     .select('plants.id, plants.name, nursery_plants.id as nursery_plant_id, nursery_plants.max_disponibility as disp, nursery_plants.num_reservations as res,
                              typology, light, size, irrigation, use, climate, description')

    @reservations = Reservation.joins(:nursery_plant)
                               .where(nursery_plants: { id: nursery_plant_ids })
                               .pluck(:user_email, :date_reservation, :time_reservation, :number_of_plants, :state, :id)
  end

end
