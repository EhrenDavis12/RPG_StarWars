

$(document).ready(setGameUpFirstTime());

$(document).on("click", ".card-character", function () {
    $(displayWorld.mainMessage).css("color", "var(--headerColor)");
    if ($(displayPlayer.name).text() === "") {
        playerHasSelectedCharacter($(this).attr("data-character"));
    } else if ($(displayEnemy.name).text() === "") {
        playerHasSelectedEnemy($(this).attr("data-character"));
    }
});

function setGameUpFirstTime(){
    $(displayWorld.jumboWords).text(messagesDictionary.jumboTitle);
    $(displayWorld.mainMessage).text(messagesDictionary.selectCharacter);
    setGameUpToPlay();
}

function setGameUpToPlay() {
    populateSelectCharacterList();
    hideOnSelectPlayerCharacter();
}

function populateSelectCharacterList() {
    if ($(displayPlayer.name).text() === "") {
        $(displayWorld.characterDiv).empty();
        $.each(characterSelectionNames, function (index, value) {
            cardFactory("characterCard",displayWorld.characterDiv, value);
        });
    }
    $(displayWorld.characterDiv).show();
}

function hideOnSelectPlayerCharacter() {
    if ($(displayPlayer.name).text() === "") {
        $(displayWorld.playerCard).hide();
    }
    if ($(displayEnemy.name).text() === "") {
        $(displayWorld.enemyCard).hide();
    }
    revealBattleButtons(false);
}

function playerHasSelectedCharacter(selectedCharacter) {
    removeFromCharacterList(selectedCharacter);
    cardFactory("characterCard",displayWorld.chosenPlayer, selectedCharacter);
    populateStatsCard(displayPlayer, selectedCharacter);
    $(displayWorld.playerCard).show();
    $(displayWorld.mainMessage).text(messagesDictionary.selectEnemy);
}

function removeFromCharacterList(name) {
    var attObj = "[data-character=" + name + "]";
    $(attObj).parent().remove();
}

function populateStatsCard(parent, selectedCharacter) {
    $(parent.name).text(selectedCharacter.toUpperCase());
    var character = getCharacter(selectedCharacter);
    populateStats(parent, character);
    renderStats(parent);
}

function populateStats(parent, character) {
    $(parent.health).attr("value", character.health);
    $(parent.attack).attr("value", character.attack);
}

function renderStats(parent) {
    $(parent.health).text("Health: " + $(parent.health).attr("value"));
    $(parent.attack).text("Attack: " + $(parent.attack).attr("value"));
}

function playerHasSelectedEnemy(selectedCharacter) {
    $(displayWorld.characterDiv).hide();
    removeFromCharacterList(selectedCharacter);
    cardFactory("characterCard",displayWorld.chosenEnemy, selectedCharacter);
    populateStatsCard(displayEnemy, selectedCharacter);
    $(displayWorld.enemyCard).show();
    $(displayWorld.mainMessage).text(messagesDictionary.battleBegin);
    $(displayWorld.enemyCard).show();
    revealBattleButtons(true);
}

function revealBattleButtons(revealButtons) {
    if (revealButtons) {
        $(displayWorld.btnShop).hide();
        $(displayWorld.btnStrike).show();
        $(displayWorld.btnJump).show();
        $(displayWorld.btnPush).show();
        $(displayWorld.btnRun).hide();
    } else {
        $(displayWorld.btnShop).hide();
        $(displayWorld.btnStrike).hide();
        $(displayWorld.btnJump).hide();
        $(displayWorld.btnPush).hide();
        $(displayWorld.btnRun).hide();
    }
}