# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  task_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :body, :author_id, :task_id, presence: true

  belongs_to :author, class_name: :User, foreign_key: :author_id
  belongs_to :task, class_name: :Task, foreign_key: :task_id
end
