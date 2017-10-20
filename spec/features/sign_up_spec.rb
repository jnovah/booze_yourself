require 'rails_helper'


feature  'i want to be able to sign up' do
  scenario "user clicks on the submit button" do
    visit new_user_registration_path
    click_button 'Sign up'
  end
end


feature  'i want to be able to sign up' do
 scenario "user clicks on the submit button" do
   visit new_user_registration_path
   click_button 'Sign up'
 end
end

feature  'i want to be able to sign up' do
  scenario "user successfully signs up" do
    visit new_user_registration_path
    fill_in "Username", with: "me"
    fill_in "State", with: "NH"
    fill_in "Email", with: "me@me.me"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"
    click_button 'Sign up'
      expect(page).to have_content("Welcome! You have signed up successfully")
  end

  scenario "user just clicks on the submit button" do
    visit new_user_registration_path
    click_button 'Sign up'
    expect(page).to have_content("State can't be blank")
    expect(page).to have_content("Username can't be blank")
    expect(page).to have_content("Email can't be blank")
    expect(page).to have_content("Password can't be blank")

  end
end
