class Agent < ApplicationRecord
  has_many :buyers
  has_many :properties

  def self.unsold_homes
    select('agents.id, first_name, last_name, email, p.sold, COUNT(*) AS frequency').joins('INNER JOIN properties AS p ON p.agent_id = agents.id').where('p.sold <> true').group('agents.id, first_name, last_name, email, p.sold').order('frequency DESC')
  end

end
