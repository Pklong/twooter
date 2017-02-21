@twoots.each do |twoot|
  json.set! twoot.id do
    json.partial! 'api/twoots/twoot', twoot: twoot
  end
end
