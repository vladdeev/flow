class Api::WorkspacesController < ApplicationController
  def index
    @workspaces = current_user.workspaces + current_user.workspace_memberships
  end

  def create
    @workspace = current_user.workspaces.new(workspace_params)
    if @workspace.save
      Workspacing.create({ user_id: current_user.id,
        workspace_id: @workspace.id })
      render :show
    else
      render json: @workspace.errors.full_messages, status: 422
    end
  end

  def show
    if params[:id] == "0"
      # all_workspaces = current_user.workspaces + current_user.workspace_memberships
      # @workspace = all_workspaces.first
    else
      @workspace = Workspace.find(params[:id])
    end
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
