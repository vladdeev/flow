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

require 'test_helper'

class WorkspacingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
