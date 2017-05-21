class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :task_id, null: false

      t.timestamps null: false
    end

    add_index :comments, :author_id
    add_index :comments, :task_id
  end
end
