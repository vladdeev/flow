class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.datetime :due_date
      t.integer :author_id, null: false
      t.integer :assignee_id
      t.integer :project_id
      t.integer :workspace_id, null: false
      t.boolean :completed, default: false
      t.datetime :completed_at
      t.datetime :updated_at
      t.timestamps null: false
    end

    add_index :tasks, :title
    add_index :tasks, :author_id
    add_index :tasks, :assignee_id
  end
end
