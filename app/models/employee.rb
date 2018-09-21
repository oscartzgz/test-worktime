class Employee < ApplicationRecord
  validates :first_name, :birthdate, presence: true

  def full_name
    first_name << ' ' << last_name
  end

  def age
    age = Date.today.year - birthdate.year
    age -= 1 if Date.today < birthdate + age.years
    age
  end
end
