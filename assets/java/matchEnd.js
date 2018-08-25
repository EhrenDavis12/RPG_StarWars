
function playerWinsMatch() {
    $(displayWorld.mainMessage).text(messagesDictionary.playerWonMatch);
    $(displayWorld.mainMessage).css("color", "var(--battleWin)");
    revealBattleButtons(false);
    $(displayWorld.chosenEnemy).toggle( "explode" );
    setTimeout(function () {
        $(displayEnemy.name).text("");
        $(displayWorld.chosenEnemy).empty();
        $(displayWorld.chosenEnemyAttack).empty();
        $(displayWorld.chosenPlayerAttack).empty();
        handlePlayerWinGame();
        $(displayWorld.chosenEnemy).toggle( "explode" );
        setGameUpToPlay();
    }, 2000);
}

function enemyWinsMatch() {
    $(displayWorld.mainMessage).text(messagesDictionary.playerLostMatch);
    $(displayWorld.mainMessage).css("color", "var(--battleLose)");
    revealBattleButtons(false);
    resetGame();
}

function handlePlayerWinGame() {
    if ($(displayWorld.characterDiv).is(':empty')) {
        $(displayWorld.mainMessage).text(messagesDictionary.playerWonGame);
        $(displayWorld.mainMessage).css("color", "var(--battleWin)");
        revealBattleButtons(false);
        resetGame();
    }
}

function resetGame() {
    setTimeout(function () {
        $(displayPlayer.name).text("");
        $(displayWorld.chosenPlayer).empty();
        $(displayWorld.chosenPlayerAttack).empty();
        $(displayEnemy.name).text("");
        $(displayWorld.chosenEnemy).empty();
        $(displayWorld.chosenEnemyAttack).empty();
        setGameUpToPlay();
    }, 2000);
}