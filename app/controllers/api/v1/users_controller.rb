module Api
  module V1
    class UsersController < ApplicationController
      def index
        users = User.all
        render json: {
          users: users
        }, status: :ok
      end

      def show
        @user = User.find(params[:id])
      end

      def new; end

      def create
        @user = User.new(user_params)
        if @user.save
          puts 'success!!!!!!'
        render json: {
          users: @users
        }, status: :ok
          puts user_params
        else
          puts 'faildddd'
          puts user_params
        # render json: {
        #   users: @users
        # }, status: :ok
        end
      end

    private

      def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
      end
    end
  end
end
