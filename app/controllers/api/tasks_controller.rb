class Api::TasksController < ApplicationController

  def index
    assigned_tasks = current_user.assigned_tasks
    created_tasks = current_user.created_tasks

    @tasks = assigned_tasks + created_tasks
  end

  def show
    @task = Task.find(params[:id])
  end

  def create
    @task = current_user.created_tasks.new(task_params)

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
