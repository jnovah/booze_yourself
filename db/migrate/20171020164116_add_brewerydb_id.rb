class AddBrewerydbId < ActiveRecord::Migration[5.1]
  def change
    add_column :beers, :brewery_db_id, :string
  end
end
