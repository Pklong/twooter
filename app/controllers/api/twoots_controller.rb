class Api::TwootsController < ApplicationController
  def index
    @twoots = Twoot.all.includes(:author)
  end

  def show
    @twoots = Twoot.find(params[:id])
  end

  def create
  end

  def update
  end

  def destroy
  end
end
