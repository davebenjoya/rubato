class StudentsController < ApplicationController
  def index
    @students = policy_scope(Student).order(created_at: :desc)
  end

  def new
    @student = Student.new
    authorize @student
  end

  def create
    @student = Student.new(student_params)
    @student.user = current_user

    authorize @student

    if @student.save
      redirect_to student_path(@student), notice: "You succesfully added a student."
    else
      render :new
    end
  end

  private

  def student_params
    params.require(:student).permit(:first_name, :last_name, :skill_level, :user_id)
  end
end