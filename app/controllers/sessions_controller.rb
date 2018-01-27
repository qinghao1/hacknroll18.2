class SessionsController < ApplicationController
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
      name: params[:name],
      picture_url: params[:picture_url]
    )
    @session.players.push(@player)
    @session.save

    render status: :success
  end

  # POST /
  def create
    @unique_id = SecureRandom.hex(6)
    @session = Session.new(
      unique_id: @unique_id,
      created_time: DateTime.now
    )

    respond_to do |format|
      if @session.save
        format.html { redirect_to @session, notice: 'Session was successfully created.' }
        format.json { render :show, status: :created, location: @session }
      else
        format.html { render :new }
        format.json { render json: @session.errors, status: :unprocessable_entity }
      end
    end

    render status: :success
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
