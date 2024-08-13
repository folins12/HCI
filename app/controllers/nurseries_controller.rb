class NurseriesController < ApplicationController
  before_action :authenticate_user!
  def index
    @nurseries = params[:query].present? ? Nursery.search(params[:query]) : Nursery.order(:position)
    @max_id = Nursery.maximum(:id)
  end

  def show
    @nursery = Nursery.find(params[:id])
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
      redirect_to @nursery, notice: 'Nursery was successfully updated.'
    else
      render :edit
    end
  end

  def edit_image
    @nursery = Nursery.find(params[:id])
  end

  def update_image
    @nursery = Nursery.find(params[:id])
    if @nursery.update(nursery_image_params)
      redirect_to @nursery, notice: 'Image was successfully updated.'
    else
      render :edit_image
    end
  end

  private

  def nursery_params
    params.require(:nursery).permit(:name, :number, :email, :address, :location, :open_time, :close_time, :description)
  end

  def nursery_image_params
    params.require(:nursery).permit(:nursery_image)
  end
  
  def validate_nursery(nursery)
    # Converti il numero di telefono in stringa
    number_str = nursery.number.to_s

    # Controlla il numero di telefono
    if number_str.blank? || number_str.length != 10
      nursery.errors.add(:number, "Il numero di telefono inserito non è valido. Deve essere di 10 cifre.")
      nursery.number = ''  # Svuota il campo numero
    elsif Nursery.exists?(number: number_str)
      nursery.errors.add(:number, "Questo numero appartiene già ad un altro vivaio, pertanto non può essere utilizzato!")
      nursery.number = ''  # Svuota il campo numero
    end

    # Controlla gli orari di apertura e chiusura
    if !valid_time?(nursery.open_time) || !valid_time?(nursery.close_time)
      nursery.errors.add(:base, "L'ora inserita non è valida. Deve essere compresa tra 0 e 24.")
      nursery.open_time = ''  # Svuota il campo open_time
      nursery.close_time = '' # Svuota il campo close_time
    elsif nursery.open_time.to_i >= nursery.close_time.to_i
      nursery.errors.add(:base, "La fascia oraria inserita non è accettabile.")
      nursery.open_time = ''  # Svuota il campo open_time
      nursery.close_time = '' # Svuota il campo close_time
    end

    #controllo nursery.address
    if nursery.address.blank?
      nursery.errors.add(:address, "Per proseguire è necessario inserire l'indirizzo")
      nursery.address = ''  # Svuota il campo address
    else
      # Verifica la validità dell'indirizzo
      unless valid_address?(nursery.address)
        nursery.errors.add(:address, "L'indirizzo inserito non è valido.")
        nursery.address = ''  # Svuota il campo address
      end
    end
  end

  def valid_time?(time)
    time.present? && time.to_i.between?(0, 24)
  end

  def valid_address?(address)
    # Usa Geocoder per verificare l'indirizzo
    results = geo(address)
    results.present? && results.first.coordinates.present?
  end

  def geo (address)
    return Geocoder.search(address)
  end
end
