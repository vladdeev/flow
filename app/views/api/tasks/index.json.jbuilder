@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :title, :description, :due_date, :author_id,
      :assignee_id, :project_id, :workspace_id, :completed, :completed_at,
      :created_at, :updated_at
  end
end
