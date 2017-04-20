class Api::WorkspacesController < ApplicationController
  def index
    @workspaces = current_user.workspaces
  end

  def create
    @workspace = current_user.workspaces.new(workspace_params)
    if @workspace.save
      render :show
    else
      render json: @workspace.errors.full_messages, status: 422
    end
  end

  def show
    @workspace = current_user.workspaces.find(params[:id])
  end

  def update
    @workspace = current_user.workspaces.find(params[:id])
    if @workspace.update(workspace_params)
      render :show
    else
      render json: @workspace.errors.full_messages, status: 422
    end
  end

  def destroy
    @workspace = current_user.workspaces.find(params[:id])
    @workspace.destroy
    render :show
  end

  private
  def workspace_params
    params.require(:workspace).permit(:title)
  end
end
