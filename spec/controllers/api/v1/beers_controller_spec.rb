require 'rails_helper'

RSpec.describe Api::V1::BeersController, type: :controller do
  let!(:type_one) { Type.create(id: 59, name: "Classic English-Style Pale Ale", description: "Classic English pale ales are golden to copper colored and display earthy, herbal English-variety hop character. Note that \"earthy, herbal English-variety hop character\" is the perceived end, but may be a result of the skillful use of hops of other national origins. Medium to high hop bitterness, flavor, and aroma should be evident. This medium-bodied pale ale has low to medium malt flavor and aroma. Low caramel character is allowable. Fruity-ester flavors and aromas are moderate to strong. Chill haze may be in evidence only at very cold temperatures. The absence of diacetyl is desirable, though, diacetyl (butterscotch character) is acceptable and characteristic when at very low levels.")}
  let!(:type_two) { Type.create(id: 72, name: "English-Style Dark Mild Ale", description: "English dark mild ales range from deep copper to dark brown (often with a red tint) in color. Malt flavor and caramel are part of the flavor and aroma profile while, licorice and roast malt tones may sometimes contribute to the flavor and aroma profile. Body should be low-medium to medium. These beers have very little hop flavor or aroma. Very low diacetyl flavors may be appropriate in this low-alcohol beer. Fruity-ester level is very low.")}
  let!(:one_beer) { Beer.create!(name: "#NOHOLDSIE Holdsie Da Deuce", description: "Rye Tripel aged in red Wine Barrels", abv: "8.2", img: nil, avg_score: nil, user_id: nil, brewery_id: nil, availability_id: nil, type_id: 59, brewery_db_id: "zrbNet")}
  let!(:second_beer) { Beer.create!(name: "'tis the Saison", description: "A Saison brewed with rye malt and three types of peppercorn.  This is Bart’s first NoDable Series brew so come out and enjoy!", abv: "7", img: nil, avg_score: nil, user_id: nil, brewery_id: nil, availability_id: nil, type_id: 72, brewery_db_id: "qbRV90")}

  describe "GET#index" do
    it "should return a list of all the beers do" do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 2
      expect(returned_json[0]["name"]).to eq "#NOHOLDSIE Holdsie Da Deuce"
      expect(returned_json[0]["description"]).to eq "Rye Tripel aged in red Wine Barrels"
      expect(returned_json[0]["abv"]).to eq "8.2"

      expect(returned_json[1]["name"]).to eq "'tis the Saison"
      expect(returned_json[1]["description"]).to eq "A Saison brewed with rye malt and three types of peppercorn.  This is Bart’s first NoDable Series brew so come out and enjoy!"
      expect(returned_json[1]["abv"]).to eq "7"
    end
  end
end
