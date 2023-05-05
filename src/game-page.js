// imports 
import { gameSettings } from "./settings-page";

// game board object
const gameBoard = {
    box1: '',
    box2: '',
    box3: '',
    box4: '',
    box5: '',
    box6: '',
    box7: '',
    box8: '',
    box9: '',
};
// functions
function displayGamePage() { 
    // top banner
    const scoreBanner = document.createElement('div');
    scoreBanner.classList.add('score-banner');
    scoreBanner.id = 'score-banner';
        const playerScoreDiv = document.createElement('div');
        playerScoreDiv.classList.add('player-score-div');
        playerScoreDiv.id = 'player-score-div';
        playerScoreDiv.textContent = (gameSettings.playerName + "'s score:  " + gameSettings.playerScore);
        scoreBanner.appendChild(playerScoreDiv);
        const roundDiv = document.createElement('div');
        roundDiv.classList.add('round-div');
        roundDiv.id = 'round-div';
        roundDiv.textContent = ('Round:  ' + gameSettings.round);
        scoreBanner.appendChild(roundDiv);
        const computerScoreDiv = document.createElement('div');
        computerScoreDiv.classList.add('computer-score-div');
        computerScoreDiv.id = 'computer-score-div';
        computerScoreDiv.textContent = ('Computer Score:  ' + gameSettings.computerScore);
        scoreBanner.appendChild(computerScoreDiv);
        //append to the div named "content"
        const banner = document.getElementById('banner');
        banner.appendChild(scoreBanner);
    // game board
    const gameBoard = document.createElement('div');
    gameBoard.classList.add('game-board');
    gameBoard.id = 'game-board';
        const box1 = document.createElement('div');
        box1.classList.add('box');
        box1.id = 'box1';
        box1.textContent = gameBoard.box1;
        gameBoard.appendChild(box1);
        const box2 = document.createElement('div');
        box2.classList.add('box');
        box2.id = 'box2';
        box2.textContent = gameBoard.box2;
        gameBoard.appendChild(box2);
        const box3 = document.createElement('div');
        box3.classList.add('box');
        box3.id = 'box3';
        box3.textContent = gameBoard.box3;
        gameBoard.appendChild(box3);
        const box4 = document.createElement('div');
        box4.classList.add('box');
        box4.id = 'box4';
        box4.textContent = gameBoard.box4;
        gameBoard.appendChild(box4);
        const box5 = document.createElement('div');
        box5.classList.add('box');
        box5.id = 'box5';
        box5.textContent = gameBoard.box5;
        gameBoard.appendChild(box5);
        const box6 = document.createElement('div');
        box6.classList.add('box');
        box6.id = 'box6';
        box6.textContent = gameBoard.box6;
        gameBoard.appendChild(box6);
        const box7 = document.createElement('div');
        box7.classList.add('box');
        box7.id = 'box7';
        box7.textContent = gameBoard.box7;
        gameBoard.appendChild(box7);
        const box8 = document.createElement('div');
        box8.classList.add('box');
        box8.id = 'box8';
        box8.textContent = gameBoard.box8;
        gameBoard.appendChild(box8);
        const box9 = document.createElement('div');
        box9.classList.add('box');
        box9.id = 'box9';
        box9.textContent = gameBoard.box9;
        gameBoard.appendChild(box9);
        const content = document.getElementById('content');
        content.appendChild(gameBoard);
        // this might not be in the right place... thgis is where you stoped before going for the night
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => box.addEventListener('click', function() {
            console.log('clicked');}));
}
export { displayGamePage };


//game logic

