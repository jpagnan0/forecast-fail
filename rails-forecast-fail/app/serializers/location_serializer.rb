class LocationSerializer < ActiveModel::Serializer
  attributes :id, :city, :zipcode, :user_id
  belongs_to :user
end
