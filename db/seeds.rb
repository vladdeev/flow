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

first_user = User.first

first_user.workspaces.create(title: "Personal Workspace")
first_workspace_id = first_user.workspaces.find_by(title: "Personal Workspace").id
Workspacing.create({ user_id: first_user.id, workspace_id: first_workspace_id })

first_user.workspaces.create(title: "Westworld Park")
second_workspace_id = first_user.workspaces.find_by(title: "Westworld Park").id
Workspacing.create({ user_id: first_user.id, workspace_id: second_workspace_id })

first_user.workspaces.create(title: "Samurai Park")
third_workspace_id = first_user.workspaces.find_by(title: "Samurai Park").id
Workspacing.create({ user_id: first_user.id, workspace_id: third_workspace_id })

first_user.projects.create(
  title: "Enjoy",
  description: "Enjoy your life",
  workspace_id: first_workspace_id
)

first_user.projects.create(
  title: "Love",
  description: "Love saves the world",
  workspace_id: first_workspace_id
)

first_user.projects.create(
  title: "Study",
  description: "Study hard",
  workspace_id: first_workspace_id
)

first_user.projects.create(
  title: "Build the narrative",
  description: "ASAP!",
  workspace_id: second_workspace_id
)

first_user.projects.create(
  title: "Fix the robot",
  description: "Dolores is clearly malfunctioning",
  workspace_id: second_workspace_id
)

first_user.projects.create(
  title: "Kill Bernard",
  description: "He knows too much",
  workspace_id: second_workspace_id
)
