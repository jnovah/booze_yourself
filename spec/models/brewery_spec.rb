require 'rails_helper'

FactoryGirl.create(:brewery)

RSpec.describe Brewery do
  it "should have a name and a website" do
    expect(brewery.name).to include("Some Brewery")
    expect(brewery.website).to include("www.somebrewery.fakeurl.com")
  end
end
