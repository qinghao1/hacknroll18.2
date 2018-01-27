class Game
  include Mongoid::Document
  field :game_type, type: Integer
  field :game_state, type: Integer
  field :num_rounds, type: Integer, default: 0
  field :current_round, type: BSON::ObjectId
  embedded_in :session
  embeds_many :rounds

  # Required emotion for current state
  def required_emotion
    # Ignore game_type for now
    case game_state
    when 1
      return "anger"
    when 2
      return "contempt"
    when 3
      return "disgust"
    when 4
      return "fear"
    when 5
      return "happiness"
    when 6
      return "neutral"
    when 7
      return "sadness"
    when 8
      return "surprise"
    end
  end
end
