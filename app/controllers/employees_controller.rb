class EmployeesController < ApplicationController
  before_action :set_employee, only: [:show, :destroy]

  def index
    @employee = Employee.new
    @employees = Employee.all
  end

  def show
  end

  def create
    @employee = Employee.new(employee_params)

    if @employee.save
      render json: @employee, status: :ok
    else
      render json: @employee.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
  end

  def destroy
    if @employee.destroy
      head :no_content
    end
  end


  private

  def set_employee
    @employee = Employee.find(params[:id])
  end

  def employee_params
    params.require(:employee).permit(:first_name, :last_name, :address, :phone, :birthdate)
  end
end