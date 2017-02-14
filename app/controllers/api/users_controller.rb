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

    @user = User.find(params[:id])

    if @user
      render :show
    else
      render json: ['User not found'], status: 404
    end
  end

  def index
    @users = User.all
  end

    def user_params
      params.require(:user).permit(:name, :password)
    end
end
