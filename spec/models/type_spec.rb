require "rails_helper"
type = FactoryGirl.create(:type)

RSpec.describe Type do
  it "has a name and description, optional" do
    expect(type.name).to include("Kettle Sour")
    expect(type.description).to include("It's sour and stuff")
  end
end
