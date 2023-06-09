// imports 
import { displayGamePage } from "./game-page.js";
import { displayBanner } from "./game-page.js";

// game settings object *********************** reset all settings to default
const gameSettings = {
    playerName: '',
    playerMarker: '',
    computerMarker: '',
    difficulty: '',
    playerScore: 0,
    computerScore: 0,
    round: 1,
    gameStatus: 'inProgress',
    resetSettings: function() {
        this.playerName = "";
        this.playerMarker = '';
        this.computerMarker = '';
        this.difficulty = '';
        this.playerScore = 0;
        this.computerScore = 0;
        this.round = 1;
        this.gameStatus = 'inProgress';
    }
};
export { gameSettings };

// functions
function displaySettingsPage() { 
    const settingsDiv = document.createElement('div');
    settingsDiv.classList.add('settings-div');
    settingsDiv.id = 'settings-div';
    const settingsHeader = document.createElement('h2');
    settingsHeader.classList.add('settings-header');
    settingsHeader.id = 'settings-header';
    settingsHeader.textContent = 'Game Settings';
    const nameInput = document.createElement('input');
    nameInput.classList.add('name-input');
    nameInput.id = 'name-input';
    nameInput.placeholder = 'Enter your name';
    const markerDiv = document.createElement('div');
    markerDiv.classList.add('marker-div');
    markerDiv.id = 'marker-div';
        const xMarkerBtn = document.createElement('button');
        xMarkerBtn.classList.add('settingsBtn');
        xMarkerBtn.id = 'x-markerBtn';
        xMarkerBtn.textContent = 'X';
        xMarkerBtn.addEventListener('click', () => {
            console.log('X Marker Button Clicked');
            xMarkerBtn.classList.add('selected');
            oMarkerBtn.classList.remove('selected');
            gameSettings.playerMarker = 'X';
            gameSettings.computerMarker = 'O';
        });
        const oMarkerBtn = document.createElement('button');
        oMarkerBtn.classList.add('settingsBtn');
        oMarkerBtn.id = 'o-markerBtn';
        oMarkerBtn.textContent = 'O';
        oMarkerBtn.addEventListener('click', () => {
            console.log('O Marker Button Clicked');
            oMarkerBtn.classList.add('selected');
            xMarkerBtn.classList.remove('selected');
            gameSettings.playerMarker = 'O';
            gameSettings.computerMarker = 'X';
        });
    markerDiv.appendChild(xMarkerBtn);
    markerDiv.appendChild(oMarkerBtn);
    const difficultyDiv = document.createElement('div');
    difficultyDiv.classList.add('difficulty-div');
    difficultyDiv.id = 'difficulty-div';
        const easyDifficultyBtn = document.createElement('button');
        easyDifficultyBtn.classList.add('settingsBtn');
        easyDifficultyBtn.id = 'easy-difficultyBtn';
        easyDifficultyBtn.textContent = 'Easy';
        easyDifficultyBtn.addEventListener('click', () => {
            console.log('Easy Difficulty Button Clicked');
            easyDifficultyBtn.classList.add('selected');
            hardDifficultyBtn.classList.remove('selected');
            gameSettings.difficulty = 'easy';
        });
        const hardDifficultyBtn = document.createElement('button');
        hardDifficultyBtn.classList.add('settingsBtn');
        hardDifficultyBtn.id = 'hard-difficultyBtn';
        hardDifficultyBtn.textContent = 'Hard';
        hardDifficultyBtn.addEventListener('click', () => {
            console.log('Hard Difficulty Button Clicked');
            hardDifficultyBtn.classList.add('selected');
            easyDifficultyBtn.classList.remove('selected');
            gameSettings.difficulty = 'hard';
        });
    difficultyDiv.appendChild(easyDifficultyBtn);
    difficultyDiv.appendChild(hardDifficultyBtn);
    const startGameBtn = document.createElement('button');
    startGameBtn.classList.add('start-game-btn');
    startGameBtn.id = 'start-game-btn';
    startGameBtn.textContent = 'Start Game';
    settingsDiv.appendChild(settingsHeader);
    settingsDiv.appendChild(nameInput);
    settingsDiv.appendChild(markerDiv);
    settingsDiv.appendChild(difficultyDiv);
    settingsDiv.appendChild(startGameBtn);
    const content = document.getElementById('content');
    content.appendChild(settingsDiv);
    startGameBtn.addEventListener('click', () => {
        console.log('Start Game Button Clicked');
        if (nameInput.value === '') {
            alert('Please enter your name');
            return;
        }
        if (gameSettings.playerMarker === '') {
            alert('Please select a marker');
            return;
        }
        if (gameSettings.difficulty === '') {
            alert('Please select a difficulty');
            return;
        }
        gameSettings.playerName = nameInput.value;
        console.log(gameSettings);
        content.innerHTML = '';
        displayGamePage();
        displayBanner();
    }
    );
}
export default displaySettingsPage;