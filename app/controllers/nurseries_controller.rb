class NurseriesController < ApplicationController
  before_action :set_nursery, only: [:show, :edit_image, :update_image, :update]

  def index
    @nurseries = params[:query].present? ? Nursery.search(params[:query]) : Nursery.order(:position)
    @max_id = Nursery.maximum(:id)
  end

  def show
    # Logica per visualizzare il vivaio
  rescue ActiveRecord::RecordNotFound
    flash[:alert] = "Il vivaio richiesto non è stato trovato."
    redirect_to nurseries_path # Reindirizza a una pagina di elenco dei vivai o alla home
  end

  def new
    @nursery = Nursery.new
  end  

  def create
    @nursery = Nursery.new(nursery_params)
    @user = User.find_by(id: session[:otp_user_id])
    
    Rails.logger.info "Trying to create a nursery with params: #{nursery_params.inspect}"
    Rails.logger.info "Current user ID: #{session[:otp_user_id]}, User found: #{@user.inspect}"
  
    validate_nursery(@nursery)
  
    @nursery.user = @user # Associa il vivaio all'utente
  
    if @nursery.errors.empty? && @nursery.save
      Rails.logger.info "Nursery successfully saved: #{@nursery.inspect}"
      @user.update(nursery: @nursery) # Aggiorna l'utente per associarlo al vivaio
      redirect_to verify_otp_path # Reindirizza alla verifica OTP
    else
      Rails.logger.error "Nursery could not be saved: #{@nursery.errors.full_messages.join(', ')}"
      render :new
    end
  end

  def update
    if @nursery.update(nursery_params)
      flash[:notice] = "Informazioni aggiornate con successo."
      redirect_to nursery_profile_path
    else
      respond_to do |format|
        format.html { render :edit }
        format.js { render 'update_errors' }
      end
    end
  end

  def edit_image
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
    Rails.logger.info "Setting nursery with ID: #{params[:id]}"
    @nursery = Nursery.find(params[:id])
    Rails.logger.info "Nursery found: #{@nursery.inspect}"
  rescue ActiveRecord::RecordNotFound
    Rails.logger.error "Nursery not found with ID: #{params[:id]}"
    flash[:alert] = "Il vivaio richiesto non è stato trovato."
    redirect_to nurseries_path # Reindirizza a una pagina di elenco dei vivai o alla home
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

  def valid_time?(time_str)
    time = time_str.to_i
    time.between?(0, 24)
  end

  def valid_address?(address)
    # Implementa qui la logica di validazione dell'indirizzo
    # Ad esempio, puoi fare un controllo semplice come
    # address.present? && address.length > 5
    true # Placeholder, sostituisci con la tua logica
  end
end
