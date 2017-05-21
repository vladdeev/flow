# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  before_save { email.downcase! }
  validates :first_name, :last_name, presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true

  after_initialize :ensure_session_token

  has_many :workspaces, class_name: :Workspace, foreign_key: :creator_id
  has_many :projects, class_name: :Project, foreign_key: :creator_id

  has_many :workspacings, class_name: :Workspacing, foreign_key: :user_id, primary_key: :id
  has_many :workspace_memberships, through: :workspacings, source: :workspace

  has_many :projects_memberships, through: :workspaces, source: :projects

  has_many :assigned_tasks, class_name: :Task, foreign_key: :assignee_id
  has_many :created_tasks, class_name: :Task, foreign_key: :author_id

  has_many :comments, class_name: :Comment, foreign_key: :author_id

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_pasword?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_pasword?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
