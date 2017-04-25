class Api::ProjectsController < ApplicationController
  def index
    workspace_id = params[:workspace_id]
    @projects = current_user.projects.where(workspace_id: workspace_id)
    debugger
  end

  def create
    workspace_id = params[:workspace_id]
    @project = current_user.projects.new(project_params)
    @project.workspace_id = workspace_id

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
      @project = current_user.projects.find(params[:id])
  end

  def update
    @project = current_user.projects.find(params[:id])
    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = current_user.projects.find(params[:id])
    @project.destroy
    render :show
  end

  private
  def project_params
    params.require(:project).permit(:title, :description, :workspace_id)
  end
end
