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
