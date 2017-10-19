class AvatarUploader < CarrierWave::Uploader::Base
  permissions 0777
  # storage :file
  storage :fog
end
