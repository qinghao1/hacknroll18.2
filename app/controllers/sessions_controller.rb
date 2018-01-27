class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # GET /
  def index
    @sessions = Session.all
  end

  # POST /
  def create
    @unique_id = SecureRandom.hex(3)
    @session = Session.new(
      unique_id: @unique_id,
      created_time: DateTime.now
    )
    @session.save

    render status: 200, json: {session_id: @unique_id}
  end

  # GET /1
  def show
    @session = Session.where(unique_id: params[:id]).first
    if @session.exists? and @session.games.blank?
      new_game = Game.new()
      @session.games.push(new_game)
      @session.current_game = new_game.id
    end
  end

  # POST /1
  def join
    @session = Session.where(unique_id: params[:id]).first
    @player = Player.new(
      name: params[:name]
    )
    @session.players.push(@player)
    @session.save

    render status: 200, json: {session_id: params[:id]}
  end
end
