module Api
  module V1
    class UsersController < ApplicationController
      def index
        @users = User.all
        render json: {
          users: @users
        }, status: :ok
      end

      def show
        @user = User.find(params[:id])
      end

      def new; end

      def create
        @user = User.new(user_params)
        login!
        if @user.save
          render json: {
            status: :created,
            users: @users
          }
        else
          render json: { status: 500 }
        end
      end

      private

      def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
      end
    end
  end
end
#テスト
