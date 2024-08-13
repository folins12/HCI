class NurseriesController < ApplicationController
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

  private

  def nursery_params
    params.require(:nursery).permit(:name, :number, :email, :address, :location, :open_time, :close_time, :description)
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
  end

  def valid_time?(time)
    time.present? && time.to_i.between?(0, 24)
  end
end
