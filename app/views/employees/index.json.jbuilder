json.array! @employees do |employee|
  json.id         employee.id
  json.full_name  employee.full_name
  json.address    employee.address
  json.phone      employee.phone
  json.birthdate  employee.birthdate
  json.age        employee.age
end