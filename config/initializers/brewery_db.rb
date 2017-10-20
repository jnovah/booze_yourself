$brewery_db = BreweryDB::Client.new do |config|
  config.api_key= '6e8622bccf5170704fa8452aab7efb48'
  config.logger = Rails.logger
end
