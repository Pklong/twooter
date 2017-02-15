@woots.each do |woot|
  json.set! woot.id do
    json.partial! 'api/woots/woot', woot: woot
  end
end
