FactoryGirl.define do
  factory :beer do
    name "Bud Light"
    abv "40"
    avg_score "99"
    user_id 2
    brewery_id 2
    availability_id 2
    type_id 1
    description "It has buds and light and water"
  end
end
