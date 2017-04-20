class CreateWorkspaces < ActiveRecord::Migration
  def change
    create_table :workspaces do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false

      t.timestamps null: false
    end

    add_index :workspaces, [:title, :creator_id], unique: true
  end
end
