// imports 
import { gameSettings } from "./settings-page";
import { displayRoundOverPage } from "./round-over-page.js";

// game board object
const gameBoardObj = {
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
    // rmove all content from divs names "content" and "banner"
    const contentx = document.getElementById('content');
    contentx.textContent = '';
    const bannerx = document.getElementById('banner');
    bannerx.textContent = '';


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
        box1.textContent = gameBoardObj.box1;
        gameBoard.appendChild(box1);
        const box2 = document.createElement('div');
        box2.classList.add('box');
        box2.id = 'box2';
        box2.textContent = gameBoardObj.box2;
        gameBoard.appendChild(box2);
        const box3 = document.createElement('div');
        box3.classList.add('box');
        box3.id = 'box3';
        box3.textContent = gameBoardObj.box3;
        gameBoard.appendChild(box3);
        const box4 = document.createElement('div');
        box4.classList.add('box');
        box4.id = 'box4';
        box4.textContent = gameBoardObj.box4;
        gameBoard.appendChild(box4);
        const box5 = document.createElement('div');
        box5.classList.add('box');
        box5.id = 'box5';
        box5.textContent = gameBoardObj.box5;
        gameBoard.appendChild(box5);
        const box6 = document.createElement('div');
        box6.classList.add('box');
        box6.id = 'box6';
        box6.textContent = gameBoardObj.box6;
        gameBoard.appendChild(box6);
        const box7 = document.createElement('div');
        box7.classList.add('box');
        box7.id = 'box7';
        box7.textContent = gameBoardObj.box7;
        gameBoard.appendChild(box7);
        const box8 = document.createElement('div');
        box8.classList.add('box');
        box8.id = 'box8';
        box8.textContent = gameBoardObj.box8;
        gameBoard.appendChild(box8);
        const box9 = document.createElement('div');
        box9.classList.add('box');
        box9.id = 'box9';
        box9.textContent = gameBoardObj.box9;
        gameBoard.appendChild(box9);
        const content = document.getElementById('content');
        content.appendChild(gameBoard);
        // this might not be in the right place... thgis is where you stoped before going for the night
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => box.addEventListener('click', () => playerTurn(box.id)));
        

}
export { displayGamePage };


//game logic
function playerTurn(thisBoxid) { 
    if (gameBoardObj[thisBoxid] !== '') {
        return;
    }
    //update the gameBoardObj and then display the new game page
    console.log("player clicked " + thisBoxid);
    gameBoardObj[thisBoxid] = gameSettings.playerMarker;
    //console.log(gameBoardObj)
    displayGamePage();

    //check for win
    checkForWin();
    
    if (gameSettings.gameStatus === 'inProgress') {
    checkForTie();
    computerTurn();
} else {
    return;
}
}

function checkForWin() { 
    console.log('checking for win')
    let box1 = gameBoardObj.box1
    let box2 = gameBoardObj.box2
    let box3 = gameBoardObj.box3
    let box4 = gameBoardObj.box4
    let box5 = gameBoardObj.box5
    let box6 = gameBoardObj.box6
    let box7 = gameBoardObj.box7
    let box8 = gameBoardObj.box8
    let box9 = gameBoardObj.box9
    // check for win
    if (box1 === box2 && box2 === box3 && box1 == gameSettings.playerMarker) {
        gameSettings.playerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage(gameSettings.playerName);
    }
    if (box4 === box5 && box5 === box6 && box4 == gameSettings.playerMarker) {
        gameSettings.playerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage(gameSettings.playerName);
    }
    if (box7 === box8 && box8 === box9 && box7 == gameSettings.playerMarker) {
        gameSettings.playerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage(gameSettings.playerName);
    }
    if (box1 === box4 && box4 === box7 && box1 == gameSettings.playerMarker) {
        gameSettings.playerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage(gameSettings.playerName);
    }
    if (box2 === box5 && box5 === box8 && box2 == gameSettings.playerMarker) {
        gameSettings.playerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage(gameSettings.playerName);
    }
    if (box3 === box6 && box6 === box9 && box3 == gameSettings.playerMarker) {
        gameSettings.playerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage(gameSettings.playerName);
    }
    if (box1 === box5 && box5 === box9 && box1 == gameSettings.playerMarker) {
        gameSettings.playerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage(gameSettings.playerName);
    }
    if (box3 === box5 && box5 === box7 && box3 == gameSettings.playerMarker) {
        gameSettings.playerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage(gameSettings.playerName);
    }
    if (box1 === box2 && box2 === box3 && box1 == gameSettings.computerMarker) {
        gameSettings.computerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage('Computer');
    }
    if (box4 === box5 && box5 === box6 && box4 == gameSettings.computerMarker) {
        gameSettings.computerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage('Computer');
    }
    if (box7 === box8 && box8 === box9 && box7 == gameSettings.computerMarker) {
        gameSettings.computerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage('Computer');
    }
    if (box1 === box4 && box4 === box7 && box1 == gameSettings.computerMarker) {
        gameSettings.computerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage('Computer');
    }
    if (box2 === box5 && box5 === box8 && box2 == gameSettings.computerMarker) {
        gameSettings.computerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage('Computer');
    }
    if (box3 === box6 && box6 === box9 && box3 == gameSettings.computerMarker) {
        gameSettings.computerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage('Computer');
    }
    if (box1 === box5 && box5 === box9 && box1 == gameSettings.computerMarker) {
        gameSettings.computerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage('Computer');
    }
    if (box3 === box5 && box5 === box7 && box3 == gameSettings.computerMarker) {
        gameSettings.computerScore++;
        gameSettings.gameStatus = 'win';
        displayRoundOverPage('Computer');
    }
}

function checkForTie() {
    console.log('checking for tie')
    let box1 = gameBoardObj.box1
    let box2 = gameBoardObj.box2
    let box3 = gameBoardObj.box3
    let box4 = gameBoardObj.box4
    let box5 = gameBoardObj.box5
    let box6 = gameBoardObj.box6
    let box7 = gameBoardObj.box7
    let box8 = gameBoardObj.box8
    let box9 = gameBoardObj.box9
    if (box1 !== '' && box2 !== '' && box3 !== '' && box4 !== '' && box5 !== '' && box6 !== '' && box7 !== '' && box8 !== '' && box9 !== '') {
        gameSettings.gameStatus = 'Tie';
        displayRoundOverPage('tie');
    };

    }

function computerTurn() {
    console.log('computer turn')
    if (gameSettings.gameStatus === 'inProgress') {
        if (gameSettings.difficulty === 'Easy') {
            console.log('easy turn made')
            let randomNum = Math.floor(Math.random() * 9) + 1;
            console.log("the random number is " + randomNum);
            let randomGameBoardObj = gameBoardObj['box' + randomNum];
            console.log(randomGameBoardObj);
            if (randomGameBoardObj !== '') {
                computerTurn();
                return;
            }
            gameBoardObj['box' + randomNum] = gameSettings.computerMarker;
            console.log(gameBoardObj);
            displayGamePage();
            checkForWin();
            if (gameSettings.gameStatus === 'inProgress') {
                checkForTie();
            } else {
                return;
            }
        }
        if (gameSettings.difficulty === 'Hard') {
            console.log('hard turn made')
        }
    } else {
        return;
    }
}