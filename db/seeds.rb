# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({
  email: "guest@welcome.io",
  password: "q1w2e3",
  first_name: "Robert",
  last_name: "Smith"
})

User.first.workspaces.create(title: "Personal Workspace")
User.first.workspaces.create(title: "Westworld Park")
User.first.workspaces.create(title: "Samurai Park ")

first_workspace_id = User.first.workspaces.find_by(title: "Personal Workspace").id
second_workspace_id = User.first.workspaces.find_by(title: "Westworld Park").id

User.first.projects.create(
  title: "Enjoy",
  description: "Enjoy your life",
  workspace_id: first_workspace_id
)

User.first.projects.create(
  title: "Love",
  description: "Love saves the world",
  workspace_id: first_workspace_id
)

User.first.projects.create(
  title: "Study",
  description: "Study hard",
  workspace_id: first_workspace_id
)

User.first.projects.create(
  title: "Build the narrative",
  description: "ASAP!",
  workspace_id: second_workspace_id
)

User.first.projects.create(
  title: "Fix the robot",
  description: "Dolores is clearly malfunctioning",
  workspace_id: second_workspace_id
)

User.first.projects.create(
  title: "Kill Bernard",
  description: "He knows too much",
  workspace_id: second_workspace_id
)
