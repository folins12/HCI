class NurseriesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_nursery, only: [:show, :edit_image, :update_image, :update]

  def index
    @nurseries = params[:query].present? ? Nursery.search(params[:query]) : Nursery.order(:position)
    @max_id = Nursery.maximum(:id)
  end

  def show
    @plants = @nursery.plants
  end
  
  def new
    @nursery = Nursery.new
  end

  def create
    @nursery = Nursery.new(nursery_params)

    # Recupera i dati utente dalla sessione
    user_data = session[:temporary_user_data]
    @user = User.new(user_data)

    # Esegui i controlli sul vivaio
    validate_nursery(@nursery)

    if @nursery.errors.any?
      render :new
    else
      ActiveRecord::Base.transaction do
        if @user.save
          @nursery.id_owner = @user.id
          if @nursery.save
            session[:user_id] = @user.id
            session.delete(:temporary_user_data)  # Rimuovi i dati temporanei dalla sessione
            redirect_to root_path, notice: "Registrazione completata con successo."
          else
            raise ActiveRecord::Rollback
          end
        else
          raise ActiveRecord::Rollback
        end
      end
    end
  end

  def update
    if @nursery.update(nursery_params)
      flash[:notice] = "Informazioni aggiornate con successo."
      redirect_to nursery_profile_path
    else
      # Gestione degli errori
      respond_to do |format|
        format.html { render :edit }
        format.js { render 'update_errors' }
      end
    end
  end

  def edit_image
    # @nursery è già impostato dal before_action :set_nursery
  end

  def update_image
    if @nursery.update(nursery_image_params)
      redirect_to @nursery, notice: 'Immagine aggiornata con successo.'
    else
      render :edit_image
    end
  end

  private

  def set_nursery
    @nursery = Nursery.find(params[:id])
  end

  def nursery_params
    params.require(:nursery).permit(:name, :number, :email, :address, :location, :open_time, :close_time, :description)
  end

  def nursery_image_params
    params.require(:nursery).permit(:nursery_image)
  end
  
  def validate_nursery(nursery)
    number_str = nursery.number.to_s

    if number_str.blank? || number_str.length != 10
      nursery.errors.add(:number, "Il numero di telefono inserito non è valido. Deve essere di 10 cifre.")
      nursery.number = ''  
    elsif Nursery.exists?(number: number_str)
      nursery.errors.add(:number, "Questo numero appartiene già ad un altro vivaio, pertanto non può essere utilizzato!")
      nursery.number = ''  
    end

    if !valid_time?(nursery.open_time) || !valid_time?(nursery.close_time)
      nursery.errors.add(:base, "L'ora inserita non è valida. Deve essere compresa tra 0 e 24.")
      nursery.open_time = ''  
      nursery.close_time = '' 
    elsif nursery.open_time.to_i >= nursery.close_time.to_i
      nursery.errors.add(:base, "La fascia oraria inserita non è accettabile.")
      nursery.open_time = ''  
      nursery.close_time = '' 
    end

    if nursery.address.blank?
      nursery.errors.add(:address, "Per proseguire è necessario inserire l'indirizzo")
      nursery.address = ''  
    else
      unless valid_address?(nursery.address)
        nursery.errors.add(:address, "L'indirizzo inserito non è valido.")
        nursery.address = ''  
      end
    end
  end

  def valid_time?(time)
    time.present? && time.to_i.between?(0, 24)
  end

  def valid_address?(address)
    results = geo(address)
    results.present? && results.first.coordinates.present?
  end

  def geo(address)
    Geocoder.search(address)
  end
end
