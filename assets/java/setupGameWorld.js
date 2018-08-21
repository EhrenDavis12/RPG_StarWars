

$(document).ready(setGameUpToPlay());

$(".card-character").on("click", function () {
    if ($(displayPlayer.name).text() === "") {
        playerHasSelectedCharacter($(this).attr("data-character"));
    } else {
        playerHasSelectedEnemy($(this).attr("data-character"));
    }
});

function setGameUpToPlay() {
    $(displayWorld.jumboWords).text(messagesDictionary.jumboTitle);
    $(displayWorld.mainMessage).text(messagesDictionary.selectCharacter);
    populateSelectCharacterList();
    hideOnSelectPlayerCharacter();
}

function populateSelectCharacterList() {
    $.each(characterSelectionNames, function (index, value) {
        createCharacterCard(displayWorld.characterDiv, value);
    });
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

function hideOnSelectPlayerCharacter() {
    $(displayWorld.playerCard).hide();
    $(displayWorld.enemyCard).hide();
    $(displayWorld.btnAttack).hide();
    $(displayWorld.playerCard).hide();
    $(displayWorld.btnDefend).hide();
    $(displayWorld.btnRun).hide();
}

function playerHasSelectedCharacter(selectedCharacter) {
    removeFromCharacterList(selectedCharacter);
    createCharacterCard(displayWorld.chosenPlayer, selectedCharacter);
    populateStats(displayPlayer, selectedCharacter);
    $(displayWorld.playerCard).show();
    $(displayWorld.mainMessage).text(messagesDictionary.selectEnemy);
}

function removeFromCharacterList(name) {
    var attObj = "[data-character=" + name + "]";
    $(attObj).remove();
}

function populateStats(parent, selectedCharacter) {
    $(parent.name).text(selectedCharacter.toUpperCase());
    var character = getCharacter(selectedCharacter);
    $(parent.health).text($(parent.health).text() + character.health);
    $(parent.attack).text($(parent.attack).text() + character.attack);
    $(parent.defence).text($(parent.defence).text() + character.defence);
}

function playerHasSelectedEnemy(selectedCharacter) {
    $(displayWorld.characterDiv).hide();
    removeFromCharacterList(selectedCharacter);
    createCharacterCard(displayWorld.chosenEnemy, selectedCharacter);
    populateStats(displayEnemy, selectedCharacter);
    $(displayWorld.enemyCard).show();
    $(displayWorld.mainMessage).text(messagesDictionary.battleBegin);
    $(displayWorld.enemyCard).show();
    revealBattleButtons()
}

function revealBattleButtons() {
    $(displayWorld.btnAttack).show();
    $(displayWorld.playerCard).show();
    $(displayWorld.btnDefend).show();
    $(displayWorld.btnRun).show();
}