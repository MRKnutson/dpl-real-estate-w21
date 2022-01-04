class Property < ApplicationRecord
  belongs_to :agent
  has_one :address

  def self.available
    select('properties.id AS property_id, price, beds, baths, sq_ft, ad.city, ad.zip, ad.street, a.id AS agent_id, a.first_name, a.last_name, a.email, ad.id as address_id').joins('INNER JOIN agents AS a ON a.id = properties.agent_id
    INNER JOIN addresses AS ad ON ad.property_id = properties.id').where('properties.sold <> true').order('a.id')
  end
end
