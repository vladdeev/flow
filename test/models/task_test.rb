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

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
