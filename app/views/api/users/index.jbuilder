@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :email, :first_name, :last_name
  end
end
