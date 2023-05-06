// imports 
import displaySettingsPage from './settings-page.js'

// functions 
function displayRules() { 
    const content = document.getElementById('content');
    content.textContent = '';
    const banner = document.getElementById('banner');
    banner.textContent = '';
    const rulesDiv = document.createElement('div');
    rulesDiv.classList.add('rules-div');
    rulesDiv.id = 'rules-div';
    const rulesHeader = document.createElement('h2');
    rulesHeader.classList.add('rules-header');
    rulesHeader.id = 'rules-header';
    rulesHeader.textContent = 'Rules';
    const rulesList = document.createElement('ul');
    rulesList.classList.add('rules-list');
    rulesList.id = 'rules-list';
    const rule1 = document.createElement('li');
    rule1.textContent = 'Select a square to put your marker.';
    const rule2 = document.createElement('li');
    rule2.textContent = 'You can only select a free square.';
    const rule3 = document.createElement('li');
    rule3.textContent = 'Firt to have 3 markers in a row (horizontally, diagonally, or vertically) wins.';
    const rule4 = document.createElement('li');
    rule4.textContent = 'You can chose to play again or restart the game.';
    rulesList.appendChild(rule1);
    rulesList.appendChild(rule2);
    rulesList.appendChild(rule3);
    rulesList.appendChild(rule4);
    rulesDiv.appendChild(rulesHeader);
    rulesDiv.appendChild(rulesList);
    //return rulesDiv;
    const okay = document.createElement('button');
    okay.classList.add('start-game-btn');
    okay.id = 'start-game-btn';
    okay.textContent = 'Okay';
    rulesDiv.appendChild(okay);
    content.appendChild(rulesDiv);
    okay.addEventListener('click', () => {
        console.log('Okay Button Clicked');
        content.innerHTML = '';
        displaySettingsPage();
    });
}
export { displayRules };