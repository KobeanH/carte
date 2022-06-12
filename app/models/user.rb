class User
  # before_save { self.email = email.downcase }
  # validates :name, presence: true, length: { maximum: 60 }
  # VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze
  # validates :email, presence: true, length: { maximum: 255 }, format: { with: VALID_EMAIL_REGEX },
  #                   uniqueness: { case_sensitive: false }
  # has_secure_password
  # validates :password, presence: true, length: { minimum: 6 }

#   def self.is_revers(stri)
#  if stri == stri.reverse
#    return true
#  else
#   return false
# end
# end

#   def self.is_revers(a,b)
#  return a + b
# end

# is_revers('たけやぶやけた')
end

# def is_Palindrome?(array)
#   if array == array.reverse
#     return true
#   else
#     return false
#   end
# end

# is_Palindrome?('たけやぶやけた')


def rotate(array)
  return array.transpose.reverse
end

# rotate([['a','b','c','d'],['e','f','g','h'],['i','j','k','l'],['m','n','o','p']])
# rotate([['a','b','c'],['d','e','f'],['g','h','i']])


  def create
    @phone = Phone.new(phone_params)
    if @phone.save
      flash[:info] = "登録に成功しました"
      redirect_to root_url
    else
      render 'new'
    end
  end

    private

    def phone_params
      params.require(:phone).permit(:name, :email, :password,
                                   :password_confirmation)
    end
