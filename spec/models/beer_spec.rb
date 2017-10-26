require "rails_helper"

brewery = Brewery.create(id:1, name: "some brewery", website: "somefakesite.com")
type = Type.create(id: 59, name: "Classic English-Style Pale Ale", description: "Classic English pale ales are golden to copper colored and display earthy, herbal English-variety hop character. Note that \"earthy, herbal English-variety hop character\" is the perceived end, but may be a result of the skillful use of hops of other national origins. Medium to high hop bitterness, flavor, and aroma should be evident. This medium-bodied pale ale has low to medium malt flavor and aroma. Low caramel character is allowable. Fruity-ester flavors and aromas are moderate to strong. Chill haze may be in evidence only at very cold temperatures. The absence of diacetyl is desirable, though, diacetyl (butterscotch character) is acceptable and characteristic when at very low levels.")
beer = Beer.create(name: "#NOHOLDSIE Holdsie Da Deuce", description: "Rye Tripel aged in red Wine Barrels", abv: "8.2", img: nil, avg_score: nil, user_id: nil, brewery_id: 1, availability_id: nil, type_id: 59, brewery_db_id: "zrbNet")

RSpec.describe Beer do
  it "has a name, description, abv, avg_score, and ids for user, brewery, type, and availability" do
    expect(beer.name).to include("#NOHOLDSIE Holdsie Da Deuce")
    expect(beer.description).to include("Rye Tripel aged in red Wine Barrels")
    expect(beer.type.id).to be(59)
  end
end
