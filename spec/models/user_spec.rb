require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_valid(:username).when('Jon', 'Sam')}
 it { should_not have_valid(:username).when(nil, '')}

 it { should have_valid(:state).when('NH', 'New Hampshire')}
 it { should_not have_valid(:state).when(nil, '')}
end
