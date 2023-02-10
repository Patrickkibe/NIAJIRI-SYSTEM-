class CreateStaffs < ActiveRecord::Migration[5.2]
  def change
    create_table :staffs do |t|
      t.string :name
      t.string :location
      t.string :image
      t.string :profession
      t.integer :phone_number

      t.timestamps
    end
  end
end
