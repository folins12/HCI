require "test_helper"

class ChiSiamoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get chi_siamo_index_url
    assert_response :success
  end
end
