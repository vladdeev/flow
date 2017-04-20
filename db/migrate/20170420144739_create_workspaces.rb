class CreateWorkspaces < ActiveRecord::Migration
  def change
    create_table :workspaces do |t|

      t.timestamps null: false
    end
  end
end
