function cardFactory(typeOfCard, parentDiv, nameToCreate) {
    switch (typeOfCard) {
        case 'characterCard':
            createCharacterCard(parentDiv, nameToCreate)
            break;
    }

    
}

function createCharacterCard(parentDiv, nameToCreate) {

    var col = $("<div>");
    col.addClass("col-md-2");
    $(parentDiv).append(col);

    var card = $("<div>");
    card.addClass("card card-character");
    card.attr("data-character", nameToCreate);
    $(col).append(card);

    var cardBody = $("<div>");
    cardBody.addClass("card-body card-body-character");
    $(card).append(cardBody);

    var characterImage = $("<img>");
    characterImage.addClass("card-img-top card-img-top-character");
    characterImage.attr("src", "./assets/characters/" + nameToCreate + ".jpg");
    $(cardBody).append(characterImage);

    var characterName = $("<h5>");
    characterName.addClass("card-title card-title-character");
    characterName.text(nameToCreate.toUpperCase())
    $(cardBody).append(characterName);
}

