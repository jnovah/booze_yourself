class CreateBreweries < ActiveRecord::Migration[5.1]
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.string :website
      t.string :brewery_db_id

      t.timestamps
    end
  end
end
