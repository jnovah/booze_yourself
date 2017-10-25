class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :rating, null: false
      t.string :description
      t.belongs_to :user
      t.belongs_to :beer

      t.timestamps
    end
  end
end
