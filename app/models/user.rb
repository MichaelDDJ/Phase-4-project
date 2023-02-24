class User < ApplicationRecord
    has_secure_password

    has_many :bookings
    has_many :hotels, through: :bookings

    validates :email, email: true
    validates :email, uniqueness: true
end
