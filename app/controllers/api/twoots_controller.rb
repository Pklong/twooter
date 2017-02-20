class Api::TwootsController < ApplicationController
  def create
    
  end

  def destroy
  end

    private

    def twoot_params
      params.require(:twoot).permit(:woot_id)
    end
end
