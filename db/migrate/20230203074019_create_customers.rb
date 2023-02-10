class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.string :username
      t.string :email_address
      t.integer :phone
      t.string :password_digest

      t.timestamps
    end
  end
end
