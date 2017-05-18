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

User.create({
  email: "2@welcome.io",
  password: "123456",
  first_name: "Melissa",
  last_name: "Parker"
})

User.create({
  email: "3@welcome.io",
  password: "123456",
  first_name: "Naomi",
  last_name: "Stivens"
})

User.create({
  email: "4@welcome.io",
  password: "123456",
  first_name: "John",
  last_name: "Ford"
})

User.create({
  email: "5@welcome.io",
  password: "123456",
  first_name: "Adam",
  last_name: "Black"
})

User.create({
  email: "6@welcome.io",
  password: "123456",
  first_name: "Ace",
  last_name: "Petrov"
})

User.create({
  email: "7@welcome.io",
  password: "123456",
  first_name: "Megan",
  last_name: "Johnson"
})

User.create({
  email: "8@welcome.io",
  password: "123456",
  first_name: "Fox",
  last_name: "Williams"
})

first_user = User.first
second_user_id = User.find_by(email: "2@welcome.io").id
third_render_id = User.find_by(email: "3@welcome.io").id
fourth_user_id = User.find_by(email: "4@welcome.io").id
fifth_user_id = User.find_by(email: "5@welcome.io").id
sixth_user_id = User.find_by(email: "6@welcome.io").id
seventh_user_id = User.find_by(email: "7@welcome.io").id
eighth_user_id = User.find_by(email: "8@welcome.io").id

first_user.workspaces.create(title: "Personal Workspace")
first_workspace_id = first_user.workspaces.find_by(title: "Personal Workspace").id
Workspacing.create({ user_id: first_user.id, workspace_id: first_workspace_id })
Workspacing.create({ user_id: second_user_id, workspace_id: first_workspace_id })
Workspacing.create({ user_id: third_render_id, workspace_id: first_workspace_id })
Workspacing.create({ user_id: fourth_user_id, workspace_id: first_workspace_id })
Workspacing.create({ user_id: fifth_user_id, workspace_id: first_workspace_id })
Workspacing.create({ user_id: sixth_user_id, workspace_id: first_workspace_id })
Workspacing.create({ user_id: seventh_user_id, workspace_id: first_workspace_id })
Workspacing.create({ user_id: eighth_user_id, workspace_id: first_workspace_id })

first_user.workspaces.create(title: "Freelance Projects")
second_workspace_id = first_user.workspaces.find_by(title: "Freelance Projects").id
Workspacing.create({ user_id: first_user.id, workspace_id: second_workspace_id })

first_user.workspaces.create(title: "Generico Projects")
third_workspace_id = first_user.workspaces.find_by(title: "Generico Projects").id
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

# SECOND PROJECT
first_user.created_tasks.create(
title: "Learn software development",
description: "Learn:\n-JavaScript\n-React+Redux\n-Ruby on Rails",
author_id: first_user.id,
due_date: get_random_date,
assignee_id: first_user.id,
project_id: second_project_id,
workspace_id: first_workspace_id,
completed: true
)

first_user.created_tasks.create(
title: "Build full-stack project",
description: "Use:\n-JavaScript\n-React+Redux\n-Ruby on Rails",
author_id: first_user.id,
due_date: get_random_date,
assignee_id: first_user.id,
project_id: second_project_id,
workspace_id: first_workspace_id,
completed: true
)


first_user.created_tasks.create(
title: "Build browther game",
description: "Use:\n-JavaScript\n-EaselJS\n-jQuery",
author_id: first_user.id,
due_date: get_random_date,
assignee_id: first_user.id,
project_id: second_project_id,
workspace_id: first_workspace_id,
completed: true
)

first_user.created_tasks.create(
title: "Build personal portfolio site",
description: "Shoul include:\n-About\n-Projects\n-Resume",
author_id: first_user.id,
due_date: get_random_date,
assignee_id: first_user.id,
project_id: second_project_id,
workspace_id: first_workspace_id,
completed: true
)

first_user.created_tasks.create(
title: "Create Resume and Cover letter",
description: "List skills, projects, work and education history",
author_id: first_user.id,
due_date: get_random_date,
assignee_id: first_user.id,
project_id: second_project_id,
workspace_id: first_workspace_id,
completed: true
)

first_user.created_tasks.create(
title: "Update LinkedIn and oter social profiles",
description: "List skills, projects, work and education history",
author_id: first_user.id,
due_date: get_random_date,
assignee_id: first_user.id,
project_id: second_project_id,
workspace_id: first_workspace_id,
completed: true
)

first_user.created_tasks.create(
title: "Apply for jobs",
description: "Send applications and resume",
author_id: first_user.id,
due_date: get_random_date,
assignee_id: first_user.id,
project_id: second_project_id,
workspace_id: first_workspace_id,
completed: true
)

first_user.created_tasks.create(
title: "Join meetup.com, find meetups, network",
description: "networking is important. Attend all interesting meetaps",
author_id: first_user.id,
due_date: get_random_date,
assignee_id: first_user.id,
project_id: second_project_id,
workspace_id: first_workspace_id,
completed: true
)

# FIRST PROJECT

first_user.created_tasks.create(
  title: "Create full-stack project proposal",
  description: "Proposal should include:\n-Minimum Viable Product\n-Wireframes\n-React Components",
  author_id: first_user.id,
  due_date: get_random_date,
  assignee_id: first_user.id,
  project_id: first_project_id,
  workspace_id: first_workspace_id,
  completed: true
)

first_user.created_tasks.create(
  title: "Create Rails project and repository",
  description: "PostgreSQL DB:\n-Gemfile\n-webpack.config.js\n-package.json",
  author_id: first_user.id,
  due_date: get_random_date,
  assignee_id: first_user.id,
  project_id: first_project_id,
  workspace_id: first_workspace_id,
  completed: true
)

first_user.created_tasks.create(
  title: "Setup backend for User Authentication",
  description: "Create:\n-Migration\n-User Model\n-User and Sessions Controller\n-RESTful routs\n-Forms and views",
  author_id: first_user.id,
  due_date: get_random_date,
  assignee_id: first_user.id,
  project_id: first_project_id,
  workspace_id: first_workspace_id,
  completed: true
)

first_user.created_tasks.create(
  title: "Setup frontend for User Authentication",
  description: "Setup functioning rails project with front-end Authentication",
  author_id: first_user.id,
  due_date: get_random_date,
  assignee_id: first_user.id,
  project_id: first_project_id,
  workspace_id: first_workspace_id,
  completed: true
)

first_user.created_tasks.create(
  title: "Implement Workspaces Model, API, and components",
  description: "Workspaces can be created, read, edited and destroyed through the API.",
  author_id: first_user.id,
  due_date: get_random_date,
  assignee_id: first_user.id,
  project_id: first_project_id,
  workspace_id: first_workspace_id,
  completed: true
)

first_user.created_tasks.create(
  title: "Implement Projects Model, API, and components",
  description: "Objective: Projects belong to Workspaces. Projects can be created, read, edited and destroyed through the API.",
  author_id: first_user.id,
  due_date: get_random_date,
  assignee_id: first_user.id,
  project_id: first_project_id,
  workspace_id: first_workspace_id,
  completed: true
)

first_user.created_tasks.create(
  title: "Implement Tasks Model, API, and components",
  description: "Objective: Tasks belong to Projects. Tasks can be created, read, edited and destroyed through the API. Tasks are displayed in lists.",
  author_id: first_user.id,
  due_date: get_random_date,
  assignee_id: first_user.id,
  project_id: first_project_id,
  workspace_id: first_workspace_id,
  completed: true
)

first_user.created_tasks.create(
  title: "Add Teams to Workspaces",
  description: "The owner of a workspace needs to be on team. Teams\nTeams belong to Workspases\nNew User created when invited to join",
  author_id: first_user.id,
  due_date: get_random_date,
  assignee_id: first_user.id,
  project_id: first_project_id,
  workspace_id: first_workspace_id,
  completed: true
)

first_user.created_tasks.create(
  title: "Add Comments to Task Details",
  description: "Any team member can add comment\nComments are one level\nComments cannot be deleted\nComments can't be added to the closed task",
  author_id: first_user.id,
  due_date: get_random_date,
  assignee_id: first_user.id,
  project_id: first_project_id,
  workspace_id: first_workspace_id,
  completed: false
)

first_user.created_tasks.create(
  title: "Add Guest Login to Front Page",
  description: "Add demonstration login to the front page and login form",
  author_id: first_user.id,
  due_date: get_random_date,
  assignee_id: first_user.id,
  project_id: first_project_id,
  workspace_id: first_workspace_id,
  completed: false
)

first_user.created_tasks.create(
  title: "Add Guest Login to Front Page",
  description: "Add demonstration login to the front page and login form",
  author_id: first_user.id,
  due_date: get_random_date,
  assignee_id: first_user.id,
  project_id: first_project_id,
  workspace_id: first_workspace_id,
  completed: false
)

first_user.created_tasks.create(
  title: "Implement optimistic update in Redux for tasks",
  description: "Tasks and task details needs to be updated at the same time without fetching tasks from the database",
  author_id: first_user.id,
  due_date: get_random_date,
  assignee_id: first_user.id,
  project_id: first_project_id,
  workspace_id: first_workspace_id,
  completed: false
)
