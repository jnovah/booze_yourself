class AddUpvoteTable < ActiveRecord::Migration[5.1]
  def change
    create_table :upvotes do |t|
      t.belongs_to :user
      t.belongs_to :review

      t.timestamps
  end
end
