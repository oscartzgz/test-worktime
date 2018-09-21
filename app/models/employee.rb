class Employee < ApplicationRecord
  validates :first_name, :birthdate, presence: true
end
