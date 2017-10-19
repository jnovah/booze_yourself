require 'rails_helper'

feature  'i want to be able to log in' do
  scenario "user registers, logs out, and logs back in unsuccessfully" do
    visit new_user_registration_path
    fill_in "Username", with: "me"
    fill_in "State", with: "NH"
    fill_in "Email", with: "me@me.me"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"
    click_button 'Sign up'
    visit destroy_user_session_path
    visit new_user_session_path
    fill_in "Email", with: "me@me.me"
    fill_in "Password", with: "passssss"
    click_button 'Log in'
      expect(page).to have_content("Forgot your password?")
      expect(page).to have_content("Invalid Email or password")
  end
  scenario "user registers, logs out, and logs back in" do
    visit new_user_registration_path
    fill_in "Username", with: "me"
    fill_in "State", with: "NH"
    fill_in "Email", with: "me@me.me"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"
    click_button 'Sign up'
    visit destroy_user_session_path
    visit new_user_session_path
    fill_in "Email", with: "me@me.me"
    fill_in "Password", with: "password"
    click_button 'Log in'
    expect(page).to have_content("Signed in successfully")
  end
end
