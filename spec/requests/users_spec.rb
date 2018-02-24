describe 'GET /api/users' do
  let!(:users) { FactoryBot.create_list(:user, 10) }

  context 'when authenticated' do
    
    before(:each) do
      login(users.first)
      get '/api/users'
    end
    
    it 'returns HTTP status 200' do
      expect(response).to have_http_status 200
    end

    it 'returns all users' do
      expect(json.size).to eq(10)
      expect(json.include?(
               {
                 name: users.last.name,
                 id: users.last.id
               }
            )).to be(true)
    end

    
  end

  context 'when not authenticated' do
    before { get '/api/users' }

    it 'returns HTTP status 403' do
      expect(response).to have_http_status 403
    end
  end
end

describe 'GET /api/users/:name' do
  let!(:user) { FactoryBot.create(:user) }

  context 'when authenticated' do
    
    before(:each) do
      login(user)
      get "/api/users/#{user.name}"
    end

    it 'returns HTTP status 200' do
      expect(response).to have_http_status 200
    end

    it 'returns the user' do
      expect(json[:name]).to eq(user.name)
      expect(json[:id]).to eq(user.id)
    end
  end

  context 'when not authenticated' do
    before(:each) { get "/api/users/#{user.name}" }

    it 'returns HTTP status 403' do
      expect(response).to have_http_status 403
    end
  end
end
