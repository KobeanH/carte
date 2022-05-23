module Api
  module V1
    class UsersController < ApplicationController
      def index
        @users = User.all
        puts @users
      end
      def show
        @user = User.find(params[:id])
      end

      def new; end
      def create
        @user = User.new(user_params)
        if @user.save
          puts 'success!!!!!!'
        else
          puts 'faild'
        end
      end

  private

    def user_params
      params.require(:user).permit(:name, :email)
    end
    end
  end
end
