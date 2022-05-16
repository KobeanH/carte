require 'rails_helper'

RSpec.describe User, type: :model do
  it "nameがある場合はtrue" do
    user = User.new(name: 'nasu')
    expect(user).to be_valid
  end

  it "nameがない場合はfalse" do
    user = User.new
    expect(user).not_to be_valid
  end
end
