class Api::ProjectsController < ApplicationController
  def index
    workspace_id = params[:workspace_id]
    @projects = Project.where(workspace_id: workspace_id)
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
      @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render :show
  end

  private
  def project_params
    params.require(:project).permit(:title, :description, :workspace_id)
  end
end
