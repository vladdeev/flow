# == Schema Information
#
# Table name: workspacings
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  workspace_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Workspacing < ActiveRecord::Base
  validates :user_id, :workspace_id, presence: true
  validates :user_id, uniqueness: { scope: :workspace_id }

  belongs_to :user, class_name: :User, foreign_key: :user_id, primary_key: :id
  belongs_to :workspace, class_name: :Workspace, foreign_key: :workspace_id, primary_key: :id
end
