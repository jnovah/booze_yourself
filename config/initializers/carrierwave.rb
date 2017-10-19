Carrierwave.configure do |config|
  config.permissions = 0666
  config.directory_permissions = 0777

  config.fog_credentials = {
    :provider => 'AWS',
    :aws_access_key_id => ENV['S3_KEY'],
    :aws_secret_access_key => ENV['S3_SECRET'],
    :region => ENV['S3_REGION']
  }

  config.storage = :fog

  config.fog_directory = 'boozeyourself'


  # if Rails.env.development? || Rails.env.test?
  #     CarrierWave.configure do |config|
  #         config.storage = :file
  #     end
  # end
  #
  # if Rails.env.production?
  #   CarrierWave.configure do |config|
  #     config.storage = :fog
  #   end
  # end
end
