class AvatarUploader < CarrierWave::Uploader::Base
  storage :file
  # storage :fog
end
