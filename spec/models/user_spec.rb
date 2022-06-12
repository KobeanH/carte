require 'rails_helper'

RSpec.describe User do
  # before do
  #   @user = User.new(name: "Example User", email: "user@example.com", password: "examplepass", password_confirmation: "examplepass")
  # end
  # describe "name属性のバリデーション" do
  #   context "name属性の有無" do
  #     it "nameがある場合はtrue" do
  #       expect(@user).to be_valid
  #     end
  #     it "nameがない場合はfalse" do
  #       @user.name = ''
  #       expect(@user).not_to be_valid
  #     end
  #   end
  #   context "name属性の長さ検証" do
  #     it "60字以下の場合はtrue" do
  #       expect(@user).to be_valid
  #     end
  #     it "60字以上の場合はfalse" do
  #       @user.email = 'a' * 61
  #       expect(@user).not_to be_valid
  #     end
  #   end
  # end

  # describe "emailのフォーマット確認" do
  #   it "空白がない場合はtrue" do
  #     expect(@user).to be_valid
  #   end
  #   it "空白がある場合はfalse" do
  #     @user.email = 'aaa @gmail.com'
  #     expect(@user).not_to be_valid
  #   end
  #   it "ドットではなくカンマの場合false" do
  #     @user.email = 'aaa@gmail,com'
  #     expect(@user).not_to be_valid
  #   end
  #   it "メアドが同じ文字列でも大文字、小文字が違っていたらtrue" do
  #     duplicate_user = @user
  #     duplicate_user.email = @user.email.upcase
  #     expect(@user).to be_valid
  #   end
  # end
  # describe "passwordのバリデーション" do
  #   context "passwordの有無" do
  #     it "passwordがある場合はtrue" do
  #       expect(@user).to be_valid
  #     end
  #     it "passwordがない場合はfalse" do
  #       @user.password = ' '
  #       @user.password_confirmation = ' '
  #       expect(@user).not_to be_valid
  #     end
  #   end
  #   context "passwordの長さ検証" do
  #     it "6字以上の場合はtrue" do
  #       @user.password = 'a' * 6
  #       @user.password_confirmation = 'a' * 6
  #       expect(@user).to be_valid
  #     end
  #     it "6字以下の場合はfalse" do
  #       @user.password = 'a'
  #       @user.password_confirmation = 'a'
  #       expect(@user).not_to be_valid
  #     end
  #   end
  # end

    # describe "回文か判定" do
    #   it "引数に渡された文字列が回文である時" do
    #     expect(User.is_revers('たけやぶやけた')).to eq true
    #   end
    #   it "引数に渡された文字列が回文ではない時" do
    #     expect(User.is_revers('たけやぶやけたた')).to eq false
    #   end
    # end
end


# RSpec.describe Palindrome do
#   describe "回文か判定" do
#     it "引数に渡された文字列が回文である時" do
#       expect(is_Palindrome?('たけやぶやけた')).to eq true
#     end
#     it "引数に渡された文字列が回文ではない時" do
#         expect(is_Palindrome?('たけやぶやけたた')).to eq false
#     end
#   end
# end


RSpec.describe User do
  describe "n*nの二次元配列を左向きに90°回転" do
    it "2*2の二次元配列の時" do
      expect(rotate([['a','b'],['c','d']])).to eq [['b','d'],['a','c']]
    end
    it "3*3の二次元配列の時" do
      expect(rotate([['a','b','c'],['d','e','f'],['g','h','i']])).to eq [['c','f','i'],['b','e','h'],['a','d','g']]
    end
    it "4*4の二次元配列の時" do
      expect(rotate([['a','b','c','d'],['e','f','g','h'],['i','j','k','l'],['m','n','o','p']])).to eq [['d','h','l','p'],['c','g','k','o'],['b','f','j','n'],['a','e','i','m']]
    end
  end
end
