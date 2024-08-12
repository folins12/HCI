class NurseriesController < ApplicationController
  before_action :authenticate_user!

  def new
    @nursery = Nursery.new
  end

  def create
    @nursery = Nursery.new(nursery_params)
    @nursery.id_owner = current_user.id  # Associa il vivaio all'utente corrente

    # Converti il numero di telefono in stringa
    number_str = @nursery.number.to_s

    # Controlla il numero di telefono
    if number_str.blank? || number_str.length != 10
      @nursery.errors.add(:number, "Il numero di telefono inserito non è valido. Deve essere di 10 cifre.")
      @nursery.number = ''  # Svuota il campo numero
    end

    # Controlla gli orari di apertura e chiusura
    if !valid_time?(@nursery.open_time) || !valid_time?(@nursery.close_time)
      @nursery.errors.add(:base, "L'ora inserita non è valida. Deve essere compresa tra 0 e 24.")
      @nursery.open_time = ''  # Svuota il campo open_time
      @nursery.close_time = '' # Svuota il campo close_time
    elsif @nursery.open_time.to_i >= @nursery.close_time.to_i
      @nursery.errors.add(:base, "La fascia oraria inserita non è accettabile.")
      @nursery.open_time = ''  # Svuota il campo open_time
      @nursery.close_time = '' # Svuota il campo close_time
    end

    # Se ci sono errori, non procedere ulteriormente
    if @nursery.errors.any?
      flash.now[:alert] = @nursery.errors.full_messages.join(", ")
      render :new
    else
      if @nursery.save
        flash[:notice] = "Nursery successfully registered."
        redirect_to root_path
      else
        flash.now[:alert] = "There was a problem registering the nursery."
        render :new
      end
    end
  end

  private

  def nursery_params
    params.require(:nursery).permit(:name, :number, :email, :address, :location, :open_time, :close_time, :description)
  end

  def valid_time?(time)
    time.present? && time.to_i.between?(0, 24)
  end
end
