class Api::TasksController < ApplicationController

  def index
    if params[:project_id] && params[:project_id] != "all"
      @tasks = Project.find(params[:project_id]).tasks
    else
      @tasks = current_user.assigned_tasks.where(workspace_id: params[:workspace_id])
      # assigned_tasks = current_user.assigned_tasks
      # created_tasks = current_user.created_tasks
      # @tasks = assigned_tasks + created_tasks
    end
  end

  def show
    @task = Task.find(params[:id])
  end

  def create
    params_with_assignment = task_params
    params_with_assignment[:assignee_id] = current_user.id
    @task = current_user.created_tasks.new(params_with_assignment)

    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])

    if @task.update(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render :show
  end

  private
  def task_params
    params.require(:task).permit(:id, :title, :description, :due_date, :author_id,
      :assignee_id, :project_id, :workspace_id, :completed, :completed_at,
      :created_at, :updated_at)
  end
end
