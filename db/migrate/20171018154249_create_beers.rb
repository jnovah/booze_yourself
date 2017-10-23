class CreateBeers < ActiveRecord::Migration[5.1]
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.text :description
      t.string :abv
      t.string :img
      t.string :avg_score

      t.belongs_to :user
      t.belongs_to :brewery
      t.belongs_to :availability
      t.belongs_to :type, null: false

      t.timestamps
    end
  end
end
