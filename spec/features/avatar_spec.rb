require "rails_helper"

feature "profile photo" do
  scenario "user uploads a profile photo" do
    visit new_user_registration_path

    fill_in "Username", with: "hello"
    fill_in "Email", with: "hello@hello.hello"
    fill_in "Password", with: "boomstick!3vilisd3ad"
    fill_in "Password confirmation", with: "boomstick!3vilisd3ad"
    attach_file :profile_photo, "#{Rails.root}/spec/support/images/picture.jpeg"
    click_button "Sign up"

    expect(page).to have_content("Welcome! You have signed up successfully.")
    expect(page).to have_css("img[src*='picture.jpeg']")
  end
end
