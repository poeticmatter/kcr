function loadCards() {
	let ref = database.ref("cards");
    const filteredCards = allCards.filter(card => !card["is_maverick"] && !card["is_enhanced"] && !card["is_anomaly"] && card["card_type"]!=="Creature2")
    let cardsArray = []
    filteredCards.forEach(card => pushToArray(cardsArray, card));
    ref.set(cardsArray)
}

function pushToArray(array, card) {
  array.push({
    "house" : card["house"],
    "id" : card["id"],
    "front_image" : card["front_image"],
    "expansion" : card["expansion"],
    "rarity" : card["rarity"],
    "card_title" : card["card_title"],
  })
}