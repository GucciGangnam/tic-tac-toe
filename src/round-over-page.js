// imports 
import { displayBanner } from "./game-page";
import { displayGamePage } from "./game-page";
import { gameSettings } from "./settings-page";
import { gameBoardObj } from "./game-page";
import { displayRules } from "./rules-page";










function displayRoundOverPage(winner) { 
    displayBanner();
    const contentx = document.getElementById('content');
    contentx.textContent = '';
    console.log("displaying" + winner + ' as winner')
    const roundOverDiv = document.createElement('div');
    roundOverDiv.classList.add('round-over-div');
    roundOverDiv.id = 'round-over-div';
    const roundOverHeader = document.createElement('h2');
    roundOverHeader.classList.add('round-over-header');
    roundOverHeader.id = 'round-over-header';
    roundOverHeader.textContent = 'Round Over';
    const roundOverMessage = document.createElement('p');
    roundOverMessage.classList.add('round-over-message');
    roundOverMessage.id = 'round-over-message';
    if (winner === 'tie') {
        roundOverMessage.textContent = 'Tie Game!';
    }
    else {
        roundOverMessage.textContent = winner + ' won!';
    }
    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('play-again-button');
    playAgainButton.id = 'play-again-button';
    playAgainButton.textContent = 'Play Again';
    const quitButton = document.createElement('button');
    quitButton.classList.add('quit-button');
    quitButton.id = 'quit-button';
    quitButton.textContent = 'Quit';
    roundOverDiv.appendChild(roundOverHeader);
    roundOverDiv.appendChild(roundOverMessage);
    // roundOverDiv.appendChild(roundOverScoresDiv);
    roundOverDiv.appendChild(playAgainButton);
    roundOverDiv.appendChild(quitButton);
    const content = document.getElementById('content');
    content.appendChild(roundOverDiv);
    playAgainButton.addEventListener('click', () => playAgain());
    quitButton.addEventListener('click', () => quitGame());
}
export { displayRoundOverPage };

function playAgain() { 
    console.log("you clicked play again");
    gameSettings.round ++;
    gameSettings.gameStatus = 'inProgress';
    gameBoardObj.resetBoard();
    displayGamePage();
    displayBanner();
}
export { gameBoardObj }

function quitGame() { 
    console.log("you clicked quit");
    gameSettings.resetSettings();
    gameBoardObj.resetBoard();
    displayRules();

}