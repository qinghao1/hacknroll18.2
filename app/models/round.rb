class Round
  include Mongoid::Document
  field :scores, type: Hash
  field :finished, type: Boolean, default: false
  embedded_in :game
end
