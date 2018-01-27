class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # GET /sessions
  # GET /sessions.json
  def index
    @sessions = Session.all
  end

  # GET /sessions/1
  # GET /sessions/1.json
  def show
    @session = Session.where(unique_id: params[:id])
    # New round logic here

  end

  # GET /sessions/new
  def new
    @session = Session.new
  end

  # POST /sessions/1
  # POST /sessions/1.json
  def join
    @session = Session.where(unique_id: params[:id])
    @player = Player.new(
      name: params[:name]
    )
    @session.players.push(@player)
    @session.save

    render status: 200
  end

  # POST /
  def create
    @unique_id = SecureRandom.hex(3)
    @session = Session.new(
      unique_id: @unique_id,
      created_time: DateTime.now
    )

    render status: 200, json: {session_id: @unique_id}
  end
end
