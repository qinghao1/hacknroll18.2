class Session
  include Mongoid::Document
  field :unique_id, type: String
  field :created_time, type: DateTime
  field :current_game, type: BSON::ObjectId
  embeds_many :players
  embeds_many :games

  index({unique_id: 1}, {unique: true, name: "session_index"})
end
