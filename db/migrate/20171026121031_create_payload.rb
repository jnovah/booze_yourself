class CreatePayload < ActiveRecord::Migration[5.1]
  def change
    create_table :payloads do |t|
      t.string :beer_name, null: false
      t.string :abv, null: false
      t.string :availability
      t.text :description, null: false
      t.string :type, null: false
      t.string :brewery_name, null: false
      t.string :brewery_website
      t.timestamps
    end
  end
end
