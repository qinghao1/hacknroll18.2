class GamesController < ApplicationController
  # GET /game/:id
  def show
    @game = Game.find(params[:id])
    # Round end logic
    if @game.current_round.blank? or @game.current_round.finished
      @game.num_rounds += 1
      new_round = Round.new()
      @game.rounds.push(new_round)
      @game.current_round = new_round.id
    end
  end

  # POST /game/:id
  def submit
    @game = Game.find(params[:id])
    @current_round = Round.find(@game.current_round)

    # Send to Azure API, update scores
    picture = params[:picture]

    uri = URI('https://southeastasia.api.cognitive.microsoft.com/face/v1.0/detect')
    uri.query = URI.encode_www_form({
        # Request parameters
        'returnFaceId' => 'false',
        'returnFaceLandmarks' => 'false',
        'returnFaceAttributes' => 'emotion',
        'processData' => 'false'
    })
    request = Net::HTTP::Post.new(uri.request_uri)
    # Request headers
    request['Content-Type'] = 'application/octet-stream'
    # Request headers
    request['Ocp-Apim-Subscription-Key'] = api_key
    # Request body
    request.body = picture

    response = Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
        http.request(request)
    end

    response = JSON.parse(response)
    emotion_score = 
      response.first["faceAttributes"]["emotion"][@game.required_emotion]
    
    @current_round.scores[params[:player_id]] = emotion_score

    max_score = @game.session.players.length
    if @current_round.scores.length == max_score
      @current_round.scores.sort_by{|k,v| v}
      @current_round.each do |player, score|
        score = max_score
        max_score -= 1
      end
      @current_round.finished = true
    end
    @current_round.save

    render status: :success
  end
end
