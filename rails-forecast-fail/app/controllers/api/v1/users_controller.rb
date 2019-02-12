class Api::V1::UsersController < ApplicationController

  def index
    @user = User.all
    render json: @user
  end

  def create
    @user = User.create(user_params)

    if @user.valid?
      render json: @user, status: :created
    else
      render json: {errors: @user.errors.full_messages}, status: :unprocessible_entity
    end
  end

  def loggedin
    @user = User.find {|user| user.username.downcase == params[:username].downcase}
      if @user
        render json: @user, status: :accepted
      else
        render json: {message: 'User name taken'}
      end
  end

  # def update
  #   @user.update(user_params)
  #   if @user.save
  #     render json: @user, status: :accepted
  #   else
  #     render json: {errors: @user.errors.full_messages }, status: :unprocessible_entity
  #   end
  # end

  private

  def user_params
    params.permit(:username)
  end

end #end of Controller Class
