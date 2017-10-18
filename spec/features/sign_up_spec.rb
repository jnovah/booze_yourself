require 'rails_helper'

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e4235d9aff485952e9e7ebe43a09a5881fec1a78
feature  'i want to be able to sign up' do
  scenario "user clicks on the submit button" do
    visit new_user_registration_path
    click_button 'Sign up'
<<<<<<< HEAD
=======
=======

feature  'i want to be able to sign up' do



 scenario "user clicks on the submit button" do
   visit new_user_registration_path
   click_button 'Sign up'
>>>>>>> 1c017a83554e67cc680900fac0e3133808421321
>>>>>>> e4235d9aff485952e9e7ebe43a09a5881fec1a78
    expect(page).to have_content("State can't be blank")
    expect(page).to have_content("Username can't be blank")
    expect(page).to have_content("Email can't be blank")
    expect(page).to have_content("Password can't be blank")
<<<<<<< HEAD
  end
end
=======
<<<<<<< HEAD
  end
end
=======
 end
 end
>>>>>>> 1c017a83554e67cc680900fac0e3133808421321
>>>>>>> e4235d9aff485952e9e7ebe43a09a5881fec1a78
