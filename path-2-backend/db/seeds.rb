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

kal = Player.create(name: "Kal")

adora = Character.create(name: "Adora", x_ancestry: "First One", x_background: "Soldier", x_class: "Champion", player: kal)

glimmer = Character.create(name: "Glimmer", x_ancestry: "Immortal", x_background: "Noble", x_class: "Sorcerer", player: kal)

bow = Character.create(name: "Bow", x_ancestry: "Human", x_background: "Scholar", x_class: "Ranger", player: kal)

