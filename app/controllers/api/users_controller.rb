class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.find_by(name: params[:name])

    if @user
      render :show
    else
      render json: ['User not found'], status: 404
    end
  end

  def index
    @users = User.all.includes(:twoots)
  end

    private

    def user_params
      params.require(:user).permit(:name, :password)
    end
end
