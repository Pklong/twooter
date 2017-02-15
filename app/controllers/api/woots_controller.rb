class Api::WootsController < ApplicationController
  def index
    @woots = Woot.all.includes(:user)
  end

  def show
    @woot = Woot.find(params[:id])
  end

  def create
    @woot = Woot.new(woot_params)
    @woot.user_id = current_user.id
    if @woot.save
      render json: show
    else
      render json: @woot.errors, status: 422
    end
  end

  def destroy
    woot = Woot.find(params[:id])
    woot.destroy
    render json: {}
  end

    private

    def woot_params
      params.require(:woot).permit(:body)
    end
end
