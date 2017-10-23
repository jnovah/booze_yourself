CarrierWave.configure do |config|

  if Rails.env.test? || Rails.env.development?
    CarrierWave.configure do |config|
      config.storage = :file
    end

  else
    CarrierWave.configure do |config|
      config.fog_credentials = {
        :provider => 'AWS',
        :aws_access_key_id => ENV['S3_KEY'],
        :aws_secret_access_key => ENV['S3_SECRET'],
        :region => ENV['S3_REGION']
      }
      # config.storage = :fog
      #
      # config.permissions = 0666
      # config.directory_permissions = 0777
      #
      #
      config.fog_directory  = ENV["S3_BUCKET"]
      # config.fog_directory = 'boozeyourself'
      # config.fog_provider = 'fog/aws'
    end
  end
end
