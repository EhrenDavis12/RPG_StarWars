
$(document).on("click", ".attack", function () {
    startFightRound(this.value);
});

$(displayWorld.btnRun).on("click", function () {
    alert("Run");
});

function startFightRound(attackChosen) {
    var enemyAttack = getComputerInput();

    displayChosenAttacks(attackChosen, enemyAttack);

    var winner = playOutTheBattle(attackChosen, enemyAttack);
    resolveBattle(winner);
    renderStats(displayPlayer);
    renderStats(displayEnemy);
    determineMatchWinner();
}

function getComputerInput() {
    return AttackOptions[Math.floor(Math.random() * AttackOptions.length)];
}

function displayChosenAttacks(attackChosen, enemyAttack){
    $(displayWorld.chosenPlayerAttack).empty();
    $(displayWorld.chosenEnemyAttack).empty();
    createCharacterCard(displayWorld.chosenPlayerAttack, attackChosen);
    createCharacterCard(displayWorld.chosenEnemyAttack, enemyAttack);
    $(displayWorld.chosenEnemyAttack).find(".card-img-top-character").addClass("flipped");
}

function playOutTheBattle(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
        return "tie";
    } else if (didPlayerWinBattle(playerChoice, computerChoice)) {
        return "player";
    } else {
        return "computer";
    }
}

function didPlayerWinBattle(playerChoice, computerChoice) {
    if ((playerChoice === 'strike' && computerChoice === 'push') ||
        (playerChoice === 'push' && computerChoice === 'jump') ||
        (playerChoice === 'jump' && computerChoice === 'strike')) {
        return true;
    }
    return false;
}

function resolveBattle(winner) {
    if (winner === "player") {
        $(displayWorld.mainMessage).text(messagesDictionary.playerWinsBattle);
        updateIntValueAttr(displayEnemy.health, "-" + $(displayPlayer.attack).attr("value"));
        updateIntValueAttr(displayPlayer.attack, "1");
        $(displayWorld.chosenPlayerAttack).find(".card").css("border-color", "var(--battleWin)");
        $(displayWorld.chosenEnemyAttack).find(".card").css("border-color", "var(--battleLose)");
    } else if (winner === "computer") {
        $(displayWorld.mainMessage).text(messagesDictionary.computerWinsBattle);
        updateIntValueAttr(displayPlayer.health, "-" + $(displayEnemy.attack).attr("value"));
        $(displayWorld.chosenPlayerAttack).find(".card").css("border-color", "var(--battleLose)");
        $(displayWorld.chosenEnemyAttack).find(".card").css("border-color", "var(--battleWin)");
    } else {
        $(displayWorld.mainMessage).text(messagesDictionary.battleTieBattle);
        $(displayWorld.chosenPlayerAttack).find(".card").css("border-color", "var(--borderColor)");
        $(displayWorld.chosenEnemyAttack).find(".card").css("border-color", "var(--borderColor)");
    }
    setIntValueAttrMinLimit(displayPlayer.attack, "1");
}

function updateIntValueAttr(display, intValueUpdate) {
    var value = parseInt($(display).attr("value"));
    value += parseInt(intValueUpdate);
    $(display).attr("value", value);
}

function setIntValueAttrMinLimit(display, min){
    var value = parseInt($(display).attr("value"));
    if (value < parseInt(min)){
        $(display).attr("value",  parseInt(min));
    }
}

function determineMatchWinner(){
    var playerHealth = parseInt($(displayPlayer.health).attr("value"));
    var enemyHealth = parseInt($(displayEnemy.health).attr("value"));
    if (enemyHealth < 1){
        playerWinsMatch();
    }else if (playerHealth < 1){
        enemyWinsMatch();
    }
}



