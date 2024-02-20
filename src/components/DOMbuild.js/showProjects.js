import { Projects } from "../classes/projects";
import { createProjectModal } from "./addNewModal"

const projectList = [
    new Projects('Project 1', 'Description of Project 1'),
    new Projects('Project 2', 'Description of Project 2'),
    new Projects('Project 3', 'Description of Project 3'),
    new Projects('Project 4', 'Description of Project 4'),
    new Projects('Project 5', 'Description of Project 5'),
    // Add more projects as needed
];
let contentContainer
let projectsContainer
createProjectModal();

function createContentContainer() {
    const container = document.createElement('div');
    container.id = 'content-container';
    document.body.appendChild(container);
    return container;
}

function createProjectsContainer() {
    const container = document.createElement('div');
    container.id = 'projects-container';
    contentContainer.appendChild(container);
    return container;
}

export function showProjects() {
    contentContainer = document.getElementById('content-container') || createContentContainer();
    contentContainer.innerHTML = '';
    projectsContainer = createProjectsContainer();

    // create new projects button
    const newProjectButton = document.createElement('button');
    newProjectButton.textContent = 'Add a New Project';
    newProjectButton.classList.add('btn', 'btn-primary', 'w-100', 'mb-3');
    newProjectButton.setAttribute('data-bs-toggle', 'modal');
    newProjectButton.setAttribute('data-bs-target', '#exampleModal');

    projectsContainer.appendChild(newProjectButton);


    // Create a row to contain the projects
    const row = document.createElement('div');
    row.classList.add('row', 'row-cols-1', 'row-cols-md-2', 'g-4');
    projectsContainer.appendChild(row);

    projectList.forEach(project => {
        // Each project will be placed in a column div
        const col = document.createElement('div');
        col.classList.add('col');

        // Create the card element for each project
        const card = document.createElement('div');
        card.style.cursor = 'pointer'; 
        card.classList.add('card');

        // Add a card body to contain the title and description
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const titleElement = document.createElement('h5');
        titleElement.classList.add('card-title');
        titleElement.textContent = project.title;
        cardBody.appendChild(titleElement);

        const descElement = document.createElement('p');
        descElement.classList.add('card-text');
        descElement.textContent = project.desc;
        cardBody.appendChild(descElement);

        // Append card body to card, and card to column div
        card.appendChild(cardBody);
        col.appendChild(card);

        // Append column to the row
        row.appendChild(col);


        card.addEventListener('click', () => {
            displayProjectDetails(project);
        })
    });
}


function displayProjectDetails(project) {
    contentContainer.innerHTML = ''; // Clear the contentContainer for project details

    // Create or find detailsContainer within contentContainer
    let detailsContainer = document.createElement('div');
    detailsContainer.id = 'project-details';
    contentContainer.appendChild(detailsContainer); // Adjusted to append within contentContainer

    const titleElement = document.createElement('h2');
    titleElement.textContent = project.title;
    detailsContainer.appendChild(titleElement);

    // Add more project information here
}
