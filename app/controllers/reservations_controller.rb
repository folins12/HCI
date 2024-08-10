class ReservationsController < ApplicationController
  before_action :set_reservation, only: [:update_reservation_quantity, :remove_reservation]

  def update_reservation_quantity
    case params[:operation]
    when 'increase'
      @reservation.quantity += 1
    when 'decrease'
      @reservation.quantity -= 1 if @reservation.quantity > 1
    end

    if @reservation.quantity == 0
      if @reservation.destroy
        render json: { success: true, new_quantity: 0, removed: true }
      else
        render json: { success: false, message: 'Errore durante la rimozione della prenotazione.' }, status: :unprocessable_entity
      end
    elsif @reservation.save
      render json: { success: true, new_quantity: @reservation.quantity }
    else
      render json: { success: false, message: 'Errore durante l\'aggiornamento della prenotazione.' }, status: :unprocessable_entity
    end
  end

  def remove_reservation
    if @reservation.destroy
      render json: { success: true }
    else
      render json: { success: false, message: 'Errore durante la rimozione della prenotazione.' }, status: :unprocessable_entity
    end
  end

  private

  def set_reservation
    @reservation = current_user.reservations.find(params[:reservation_id])
  rescue ActiveRecord::RecordNotFound
    render json: { success: false, message: 'Prenotazione non trovata.' }, status: :not_found
  end
end
