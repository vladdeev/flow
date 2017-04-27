# == Schema Information
#
# Table name: workspaces
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Workspace < ActiveRecord::Base
  validates :title, :creator_id, presence: true
  validates :title, uniqueness: { scope: :creator_id }

  belongs_to :creator, class_name: :User, foreign_key: :creator_id

  has_many :workspacings, class_name: :Workspacing, foreign_key: :workspace_id, primary_key: :id
  has_many :members, through: :workspacings, source: :user
  has_many :projects
  has_many :tasks
end
