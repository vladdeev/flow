# == Schema Information
#
# Table name: tasks
#
#  id           :integer          not null, primary key
#  title        :string
#  description  :string
#  due_date     :datetime
#  author_id    :integer          not null
#  assignee_id  :integer
#  project_id   :integer
#  workspace_id :integer          not null
#  completed    :boolean          default("false")
#  completed_at :datetime
#  updated_at   :datetime         not null
#  created_at   :datetime         not null
#

class Task < ActiveRecord::Base
  validates :author_id, :workspace_id, presence: true

  belongs_to :author, class_name: :User, foreign_key: :author_id
  belongs_to :assignee, class_name: :User, foreign_key: :assignee_id
  belongs_to :project
  belongs_to :workspace
  has_one :workspace, through: :project, source: :workspace
  has_many :comments, class_name: :Comment, foreign_key: :task_id
end
