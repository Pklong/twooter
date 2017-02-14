class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:name],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  def destroy
    if current_user
      logout
      @user = User.new
      render 'api/users/show'
    else
      render json: ['No user to logout'], status: 404
    end
  end
end
