class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:name], params[:user][:password]
    )
    if (@user)
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid login"], status: 401
    end
  end

  def destroy
    logout!
    render json: {}
  end
end
