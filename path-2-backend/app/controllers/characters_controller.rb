class CharactersController < ApplicationController

    def create

        character = Character.new(
            name: character_params[:name], 
            x_ancestry: character_params[:x_ancestry], 
            x_background: character_params[:x_background], 
            x_class: character_params[:x_class],
            player: Player.find_by(name: character_params[:player])
        )
        character.save
        render json: character, include: :player
        # if player.save
        #     render json: character
        # else
        #     render json: {some: "#{player.errors.messages.keys.last} #{player.errors.messages.values.last.last}"}, status: 501
        # end

    end

    def destroy
        character = Character.find(params[:id])
        character.destroy
        render json: character.id
    end

    private

    def character_params
        params.permit(:name, :x_ancestry, :x_background, :x_class, :player)
    end

end
