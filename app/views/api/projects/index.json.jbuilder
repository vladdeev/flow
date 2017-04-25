@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :description, :creator_id, :workspace_id, :created_at, :updated_at
  end
end
