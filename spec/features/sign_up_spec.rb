require 'rails_helper'

feature  'i want to be able to sign up' do
  scenario "user clicks on the submit button" do
    visit new_user_registration_path
    click_button 'Sign up'

feature  'i want to be able to sign up' do
 scenario "user clicks on the submit button" do
   visit new_user_registration_path
   click_button 'Sign up'
    expect(page).to have_content("State can't be blank")
    expect(page).to have_content("Username can't be blank")
    expect(page).to have_content("Email can't be blank")
    expect(page).to have_content("Password can't be blank")
  end
end
