class UserSerializer < ActiveModel::Serializer
  has_many :locations
  attributes :id, :username
end
