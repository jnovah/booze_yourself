require "rails_helper"
beer = FactoryGirl.create(:beer)

RSpec.describe Beer do
  it "has a name, description, abv, avg_score, and ids for user, brewery, type, and availability" do
    expect(beer.name).to include("Bud Light")
    expect(beer.description).to include("It has buds and light and water")
    expect(beer.avg_score).to include("99")
    expect(beer.user_id).to eq(2)
    expect(beer.brewery_id).to eq(2)
    expect(beer.type_id).to eq(2)
    expect(beer.availability_id).to eq(2)
  end
end
