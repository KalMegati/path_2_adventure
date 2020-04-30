class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :x_ancestry
      t.string :x_background
      t.string :x_class
      t.references :player, null: false, foreign_key: true

      t.timestamps
    end
  end
end
