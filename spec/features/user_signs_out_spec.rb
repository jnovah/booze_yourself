require 'rails_helper'

feature  'i want to be able to sign out' do
  scenario "user registers and visits the sign out path" do
    visit new_user_registration_path
    fill_in "Username", with: "me"
    fill_in "State", with: "NH"
    fill_in "Email", with: "me@me.me"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"
    click_button 'Sign up'
    visit destroy_user_session_path
      expect(page).to have_content("Signed out successfully")
  end
end
