class Agent < ApplicationRecord
  has_many :index_buyers
  has_many :properties
end
