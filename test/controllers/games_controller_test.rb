require 'test_helper'

class GamesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get games_show_url
    assert_response :success
  end

  test "should get submit" do
    get games_submit_url
    assert_response :success
  end

end
