class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.integer :user_id
      t.integer :hotel_id
      t.datetime :date_booked

      t.timestamps
    end
  end
end
