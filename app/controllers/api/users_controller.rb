class Api::UsersController < ApplicationController
  before_action :protect_route, only: [:index, :show]
  
  def create
    @user = User.new(user_params)
    if (@user.save)
      login!(@user)
      render :show
    else
      render @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find_by(name: params[:name])
    if @user
      @user.destroy
      render :show
    else
      render json: ["No user: '#{params[:name]}' found."], status: 404
    end

  end

  def show
    @user = User.find_by(name: params[:name])
    if @user
      render :show
    else
      render json: ["No user: '#{params[:name]}' found."], status: 404
    end
  end

  def index
    @users = User.all
    
    render :index
  end

  private
  
  def user_params
    params.require(:user).permit(:password, :name)
  end
end
