# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

def get_random_date()
  n = rand(10);
  time = " " + Time.now.utc.strftime("%T")
  (Date.today + n).to_s + time
end

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
  title: "Full-Stack Project",
  description: "Full-Stack Project",
  workspace_id: first_workspace_id
)

first_project_id = first_user.projects.find_by(title: "Full-Stack Project").id

first_user.projects.create(
  title: "Find a Job",
  description: "Find a Job",
  workspace_id: first_workspace_id
)

second_project_id = first_user.projects.find_by(title: "Find a Job").id
#
# first_user.projects.create(
#   title: "Study",
#   description: "Study hard",
#   workspace_id: first_workspace_id
# )
#
# first_user.projects.create(
#   title: "Build the narrative",
#   description: "ASAP!",
#   workspace_id: second_workspace_id
# )
#
# first_user.projects.create(
#   title: "Fix the robot",
#   description: "Dolores is clearly malfunctioning",
#   workspace_id: second_workspace_id
# )
#
# first_user.projects.create(
#   title: "Kill Bernard",
#   description: "He knows too much",
#   workspace_id: second_workspace_id
# )

first_user.created_tasks.create(
  title: "Create full-stack project proposal",
  description: "Proposal should include:\n-Minimum Viable Product\n-Wireframes\n-React Components",
  author_id: first_user.id,
  due_date: get_random_date,
  assignee_id: first_user.id,
  project_id: first_project_id,
  workspace_id: first_workspace_id,
  completed: false
)

first_user.created_tasks.create(
  title: "Learn software development",
  description: "Learn:\n-JavaScript\n-React+Redux\n-Ruby on Rails",
  author_id: first_user.id,
  due_date: get_random_date,
  assignee_id: first_user.id,
  project_id: second_project_id,
  workspace_id: first_workspace_id,
  completed: false
)
