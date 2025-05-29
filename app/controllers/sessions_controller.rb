class SessionsController < Devise::SessionsController
  before_action :find_user, only: [:create, :confirm_otp]

  def create
    if @user.nil?
      flash[:alert] = "There is no account registered with this email address."
      render :new and return
    elsif !@user.valid_password?(params[:user][:password])
      flash[:alert] = "Incorrect password for this address."
      render :new and return
    else
      sign_in(@user)
      redirect_to root_path, notice: 'Login successful!'
    end
  end

  def new_password_reset
    # Questo metodo può essere opzionalmente rimosso se non serve più
    render :password_reset
  end

  def edit_password_reset
    render :edit_password_reset
  end

  def reset_password
    User.all.each do |user|
      if user.verify_reset_password_token(params[:reset_token])

        if valid_password?(params[:new_password])
          if params[:new_password] == params[:confirm_password]

            if user.valid_password?(params[:new_password])
              flash.now[:alert] = "The new password you set cannot be the same as the previous one!"
              render :edit_password_reset
              return
            end

            user.password = params[:new_password]
            user.reset_password_token = nil

            if user.save
              sign_in_and_redirect user, event: :authentication
            else
              flash.now[:alert] = "Error saving new password."
              render :edit_password_reset
            end
          else
            flash.now[:alert] = "The confirmed password is different from the one previously entered."
            render :edit_password_reset
          end
        else
          flash.now[:alert] = "The password entered is not valid, create one that meets the following requirements:
          - At least 8 characters
          - Must contain at least one capital letter
          - Must contain at least one number
          - Must contain at least one special character"
          render :edit_password_reset
        end

        return
      end
    end
    flash.now[:alert] = "The token entered is incorrect."
    render :edit_password_reset
  end


  def send_reset_password_token
    user = User.find_by(email: params[:email])
    if user.present?
      user.send_reset_password_instructions
      flash[:notice] = "Reset token sent to your email."
      redirect_to edit_password_reset_path # Reindirizza alla vista per inserire la nuova password
    else
      flash[:alert] = "There is no account corresponding to this email address."
      redirect_to new_password_reset_path
    end
  end


  private

  def find_user
    @user = User.find_by(email: params[:user][:email].downcase.strip)
  end

  def valid_password?(password)
    # Verifica se la password rispetta i requisiti minimi
    password.present? && password.length >= 8 &&
      password.match?(/[A-Z]/) && password.match?(/\d/) &&
      password.match?(/[!@#$%^&*(),.?":{}|<>]/)
  end

  def clear_temporary_session_data
    session.delete(:temporary_user_data)
    session.delete(:otp_user_id)
  end

end
