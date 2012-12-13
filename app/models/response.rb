class Response < ActiveRecord::Base
  attr_accessible :answer, :question_id, :user_id, :short_answer
  validates :answer, :question_id, :user_id, presence: true
    
  belongs_to :user
  belongs_to :question
end
