class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description
      t.integer :creator_id, null: false
      t.integer :workspace_id, null: false

      t.timestamps null: false
    end

    add_index :projects, :title
    add_index :projects, :workspace_id
  end
end
