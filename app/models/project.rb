# == Schema Information
#
# Table name: projects
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  description  :text
#  creator_id   :integer
#  workspace_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Project < ActiveRecord::Base
  validates :title, :creator_id, :workspace_id, presence: true

  belongs_to :creator, class_name: :User, foreign_key: :creator_id
  belongs_to :workspace
  has_many :tasks
end
