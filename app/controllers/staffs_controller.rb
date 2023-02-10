class StaffsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :staff_not_found


def index
    staffs = Staff.all
    render json: staffs
end


def show
    staff = Staff.find(params[:id])
    render json: staff
end




def update
     staff = Staff.find_by(id:params[:id])
    if staff
        staff.update(staff_params)
        render json:staff, status: :ok
    else
        render json: {error:"Staff not found"}, status:not_found
    end
end




def destroy
    staff = Staff.find_by(id:params[:id])
    if staff
        staff.destroy
        head :no_content
     else
        render json: {error:"Staff not found"}, status: :not_found
    end
end



private
    


def staff_params
    params.permit(:name, :location, :image, :profession, :phone_number )
end




end
