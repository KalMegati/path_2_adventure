class PlayersController < ApplicationController

    def index
        players = Player.all
        render json: players, include: :characters
    end

    def create
        #binding.pry
        player = Player.new(
            name: player_params[:name]
        )
        player.save
    end

    private

    def player_params
        params.require("player").permit("name")
    end

end
