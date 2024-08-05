class ReservationsController < ApplicationController
  before_action :set_nursery_plant, only: [:new, :create]

  def new
    @reservation = Reservation.new
  end

  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      redirect_to @reservation, notice: 'Prenotazione effettuata con successo.'
    else
      render :new
    end
  end

  private

  def set_nursery_plant
    @nursery_plant = NurseryPlant.find(params[:nursery_plant_id])
  rescue ActiveRecord::RecordNotFound
    redirect_to nurseries_path, alert: 'Vivaio o pianta non trovato.'
  end

  def reservation_params
    params.require(:reservation).permit(:user_name, :user_email, :pickup_time, :nursery_plant_id)
  end
end
