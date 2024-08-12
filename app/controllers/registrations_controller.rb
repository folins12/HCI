class RegistrationsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    # Esegui il controllo del nome
    if @user.nome.blank?
      @user.errors.add(:nome, "Per proseguire è necessario inserire il nome")
      @user.nome = ''  # Svuota il campo nome
    end

    # Esegui il controllo del cognome
    if @user.cognome.blank?
      @user.errors.add(:cognome, "Per proseguire è necessario inserire il cognome")
      @user.cognome = ''  # Svuota il campo cognome
    end

    if User.exists?(email: @user.email)
      @user.errors.add(:email, "Impossibile utilizzare questo indirizzo email per la registrazione. Qualcuno ha già effettuato l'iscrizione utilizzando questo indirizzo!")
      @user.email = ''  # Svuota il campo email
    end

    # Controlla la validità della password
    if @user.password.present? && (
      @user.password.length < 8 ||
      !@user.password.match(/[A-Z]/) ||
      !@user.password.match(/\d/) ||
      !@user.password.match(/[\W_]/)
    )
      @user.errors.add(:password, "La password inserita non è valida, crearne una che rispetti i seguenti requisiti: 
        - Almeno 8 caratteri 
        - Deve contenere almeno una lettera maiuscola 
        - Deve contenere almeno un numero 
        - Deve contenere almeno un carattere speciale")
      @user.password = ''  # Svuota il campo password
    end

    # Controlla la conferma della password
    if @user.password != @user.password_confirmation
      @user.errors.add(:password_confirmation, "La password confermata è diversa da quella inserita precedentemente")
      @user.password_confirmation = ''  # Svuota il campo password_confirmation
    end

    # Se ci sono errori, non procedere ulteriormente
    if @user.errors.any?
      render :new
    else
      if @user.save
        session[:user_id] = @user.id
        if @user.nursery
          redirect_to new_nursery_path
        else
          redirect_to root_path, notice: "Registrazione avvenuta con successo"
        end
      else
        render :new
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:nome, :cognome, :email, :password, :password_confirmation, :nursery, :address)
  end
end
