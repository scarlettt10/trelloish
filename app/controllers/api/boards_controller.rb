class Api::BoardsController < ApplicationController
  before_action :set_board, only: [:show, :update, :destroy]
  
    def index
      render json: Board.all.order(created_at: :desc)
    end
  
    def show
      render json: @board
    end
  
    def create
      board = Board.create(app_params)
      if board.save
        render json: board
      else
        render json: { errors: board.errors.full_messages.join(',') }, status: 422
      end
    end
  
    def update
      if @board.update(board_params)
        render json: @board
      else
        render json: { errors: @board.errors.full_messages.join(',') }, status: 422
      end
    end
  
    def destroy
      @board.destroy
    end
  
    private
      def set_app
        @board = Board.find(params[:id])
      end
  
      def board_params
        params.require(:board).permit(:name, :description)
      end
  end
  
