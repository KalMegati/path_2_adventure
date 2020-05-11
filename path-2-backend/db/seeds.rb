# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'securerandom'
 
Character.delete_all
Player.delete_all

noelle = Player.create(name: "Noelle")

adora = Character.create(name: "Adora", x_ancestry: "Elf", x_background: "Soldier", x_class: "Fighter", player: noelle)

glimmer = Character.create(name: "Glimmer", x_ancestry: "Half-Elf", x_background: "Noble", x_class: "Sorcerer", player: noelle)

bow = Character.create(name: "Bow", x_ancestry: "Human", x_background: "Scholar", x_class: "Ranger", player: noelle)

aj = Player.create(name: "AJ")