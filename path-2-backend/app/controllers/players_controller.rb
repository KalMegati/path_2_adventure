class PlayersController < ApplicationController

    def index
        players = Player.all
        render json: players, include: :characters
    end

end
