require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Twooter
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1
    config.paperclip_defaults = {
      storage: :s3,
      s3_credentials: {
        bucket: ENV["S3_BUCKET"],
        access_key_id: ENV["S3_KEY"],
        secret_access_key: ENV["S3_SECRET"],
        s3_region: ENV["S3_REGION"]
      }
    }
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
