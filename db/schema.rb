# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170427135659) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "projects", force: :cascade do |t|
    t.string   "title",        null: false
    t.text     "description"
    t.integer  "creator_id"
    t.integer  "workspace_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "projects", ["title"], name: "index_projects_on_title", using: :btree
  add_index "projects", ["workspace_id"], name: "index_projects_on_workspace_id", using: :btree

  create_table "tasks", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.datetime "due_date"
    t.integer  "author_id",                    null: false
    t.integer  "assignee_id"
    t.integer  "project_id"
    t.integer  "workspace_id",                 null: false
    t.boolean  "completed",    default: false
    t.datetime "completed_at"
    t.datetime "updated_at",                   null: false
    t.datetime "created_at",                   null: false
  end

  add_index "tasks", ["assignee_id"], name: "index_tasks_on_assignee_id", using: :btree
  add_index "tasks", ["author_id"], name: "index_tasks_on_author_id", using: :btree
  add_index "tasks", ["title"], name: "index_tasks_on_title", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

  create_table "workspaces", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "creator_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "workspaces", ["title", "creator_id"], name: "index_workspaces_on_title_and_creator_id", unique: true, using: :btree

  create_table "workspacings", force: :cascade do |t|
    t.integer  "user_id",      null: false
    t.integer  "workspace_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "workspacings", ["user_id", "workspace_id"], name: "index_workspacings_on_user_id_and_workspace_id", unique: true, using: :btree

end
