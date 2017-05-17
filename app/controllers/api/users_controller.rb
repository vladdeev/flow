class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
      workspace = Workspace.find(params[:workspace_id])
      @users = workspace.members
  end

  def join
    workspace = Workspace.find(params[:workspace_id])
    @user = workspace.members.create(user_params)
    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
