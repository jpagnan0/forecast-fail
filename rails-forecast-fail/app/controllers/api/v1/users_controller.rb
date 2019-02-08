class Api::V1::UsersController < ApplicationController

  def index
    @user = User.all
    render json: @user
  end

  def update
    @user.update(user_params)
    if @user.save
      render json: @user, status: :accepted
    else
      render json: {errors: @user.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def user_params
    params.permit(:username)
  end

end #end of Controller Class
