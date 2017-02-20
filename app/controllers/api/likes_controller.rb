class Api::LikesController < ApplicationController
  def create
    like = Like.new(like_params)
    like.user_id = current_user.id

    if like.save
      @woot = like.woot
      render 'api/woots/show'
    else
      render json: like.errors, status: 422
    end
  end

  def destroy
    like = Like.find(params[:id])
    like.destroy
    @woot = like.woot
    render 'api/woots/show'
  end

    private

    def like_params
      params.require(:like).permit(:woot_id)
    end
end
