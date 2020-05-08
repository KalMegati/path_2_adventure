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
        if player.save
            render json: player, include: :characters 
        else
            render json: {some: "#{player.errors.messages.keys.last} #{player.errors.messages.values.last.last}"}, status: 501
        end
    end

    private

    def player_params
        params.require("player").permit("name")
    end

end
