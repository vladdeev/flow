class CreateWorkspacings < ActiveRecord::Migration
  def change
    create_table :workspacings do |t|
      t.integer :user_id, null: false
      t.integer :workspace_id, null: false

      t.timestamps null: false
    end

    add_index :workspacings, [:user_id, :workspace_id], unique: true
  end
end
