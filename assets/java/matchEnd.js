
function playerWinsMatch(){
    /* alert("Player Wins"); */
    $(displayWorld.mainMessage).text(messagesDictionary.playerWonMatch);
    $(displayWorld.mainMessage).css("color", "var(--battleWin)");
        
    $(displayEnemy.name).text("");
    $(displayWorld.chosenEnemy).empty();
    $(displayWorld.chosenEnemyAttack).empty();
    $(displayWorld.chosenPlayerAttack).empty();
    handlePlayerWinGame();
    setGameUpToPlay();
}

function enemyWinsMatch(){
    /* alert("Enemy Wins"); */
    $(displayWorld.mainMessage).text(messagesDictionary.playerLostMatch);
    $(displayWorld.mainMessage).css("color", "var(--battleLose)");
    resetGame();
}

function handlePlayerWinGame(){
    if ($(displayWorld.characterDiv).is(':empty')){
        /* alert("Player Has won the GAME!!!"); */
        $(displayWorld.mainMessage).text(messagesDictionary.playerWonGame);
        $(displayWorld.mainMessage).css("color", "var(--battleWin)");
        resetGame();
    }
}

function resetGame(){
    $(displayPlayer.name).text("");
    $(displayWorld.chosenPlayer).empty();
    $(displayWorld.chosenPlayerAttack).empty();
    $(displayEnemy.name).text("");
    $(displayWorld.chosenEnemy).empty();
    $(displayWorld.chosenEnemyAttack).empty();
    setGameUpToPlay();
}