import { addDays } from 'date-fns';

import { projectManager } from '../classes/projectManager';
import { today } from '../logic/dateLogic';


// create 3 cards to display the 3 closest tasks to today
export function showMain() {
    const contentContainer = document.getElementById('content-container') || createContentContainer();
    contentContainer.innerHTML = '';

    const mainContainer = document.createElement('div');
    contentContainer.appendChild(mainContainer);

    let h1 = document.createElement('h1');
    h1.textContent = 'Welcome to TaskMaster';
    mainContainer.appendChild(h1);

    let p = document.createElement('p');
    p.textContent = 'Here are the 3 closest tasks to today:';
    mainContainer.appendChild(p);

    let tasks = projectManager.getTasksWithClosestDueDates() 
    tasks.forEach((task, index) => {
        let card = document.createElement('div');
        card.classList.add('card', 'mb-3');
        mainContainer.appendChild(card);

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        card.appendChild(cardBody);

        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = task.title;
        cardBody.appendChild(cardTitle);

        let cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = `Due: ${task.dueDate}`;
        cardBody.appendChild(cardText);

        
    }
    );
}