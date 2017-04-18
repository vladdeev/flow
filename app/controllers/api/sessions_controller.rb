class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
                                      params[:user][:email],
                                      params[:user][:password]
                                    )
    if @user
      log_in!(@user)
      render "api/users/show"
    else
      render json: { base: ["Invalid email/password combination"] }, status: 401
    end
  end

  def destroy
    if current_user
      log_out!
      render json: {}
    else
      render json: { base: ["You are already signed out"] }, status: 418
    end
  end
end
