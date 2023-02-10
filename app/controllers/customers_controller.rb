class CustomersController < ApplicationController
    before_action :authorize, only: [:show]

    def create
        customer = Customer.create(customer_params)

        if customer.valid?
        session[:customer_id] = customer_id
        render json: customer, status: :created

        else
            render json: { errors: customer.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        customer = Customer.find_by(id: session[:customer_id])
        render json:customer
    end

    def update
        customer = Customer.find_by(id:params[:id])
        if customer
            customer.update(customer_params)
            render json:customer, status: :ok
        else
            render json: {error:"Customer not found"}, status:not_found
        end
    end

    def destroy
        customer = Customer.find_by(id:params[:id])
        if customer
            customer.destroy
            head :no_content
         else
            render json: {error:"Customer not found"}, status: :not_found
        end
    end

    private

    def customer_params
        params.permit(:username, :email_address, :phone, :password, :password_confirmation )
    end


    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :customer_id
    end
end