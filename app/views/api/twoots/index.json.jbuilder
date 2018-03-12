json.twoots do
  @twoots.each do |twoot|
    json.set! twoot.id do
      json.partial! 'twoot.json.jbuilder', twoot: twoot
    end
  end
end

json.users do
  @twoots.each do |twoot|
    json.set! twoot.author.id do
      json.partial! 'api/users/user.json.jbuilder', user: twoot.author
    end
  end
end
