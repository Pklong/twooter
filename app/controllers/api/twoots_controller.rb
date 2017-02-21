class Api::TwootsController < ApplicationController
  def index
    @twoots = Twoot.all.includes(:user)
  end

  def show
    @twoot = Twoot.find(params[:id])
  end

  def create
    @twoot = Twoot.new(twoot_params)
    @twoot.user_id = current_user.id
    if @twoot.save
      render :show
    else
      render json: @twoot.errors, status: 422
    end
  end

  def destroy
    twoot = Twoot.find(params[:id])
    twoot.destroy
    render json: {}
  end

    private

    def twoot_params
      params.require(:twoot).permit(:body)
    end
end
