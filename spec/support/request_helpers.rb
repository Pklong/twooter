module Request
  module JSONHelpers
    def json
      @json ||= JSON.parse(response.body, symbolize_names: true)
    end
  end
  module AuthHelpers
    def login user
      post '/api/session', :params => {
             user: {
               name: user.name,
               password: 'vault-boy'
             }
           }
    end
  end
end
