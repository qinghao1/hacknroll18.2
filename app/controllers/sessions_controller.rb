class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_session, only: [:show]

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

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_session
      @session = Session.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def session_params
      params.fetch(:session, {})
    end
end
