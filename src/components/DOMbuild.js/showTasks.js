import { projectManager } from '../classes/projectManager';
import { addNewTaskModal } from './addNewTaskModal';
//tasks are stored as an array in the project object. this function will display the tasks for a given project.
//if there are no tasks, it will display a h3 element with the text "No tasks to display"
//the project parameter is a project object. to access the tasks

let taskContainer = document.getElementById('task-container') || document.createElement('div');
let h3 = document.createElement('h3');

addNewTaskModal();
export function showTasks(project) {
    let projectTasks = project.tasks;
    console.log(projectTasks);
    // this being appended onto displayProjectDetails

    taskContainer.innerHTML = '';

    if (!projectTasks.length) {
    h3.textContent = 'No tasks to display';
    taskContainer.appendChild(h3);
    }
    else {
        // loop through the tasks and display them as accordion items
        projectTasks.forEach((task, index) => {
            const taskCard = document.createElement('div');
            taskCard.classList.add('accordion', 'mb-3');
            taskCard.id = `task-${index}`;
            taskCard.innerHTML = `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading-${index}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${index}" aria-expanded="true" aria-controls="collapse-${index}">
                        ${task.title}
                    </button>
                </h2>
                <div id="collapse-${index}" class="accordion-collapse collapse" aria-labelledby="heading-${index}" data-bs-parent="#task-${index}">
                    <div class="accordion-body">
                        <p>${task.desc}</p>
                        <p>Due: ${task.dueDate}</p>
                        <p>Priority: ${task.priority}</p>
                    </div>
                </div>
            </div>
            `;
            taskContainer.appendChild(taskCard);
        });
    }

    // add a button to add a task
    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add a New Task';
    addTaskButton.classList.add('btn', 'btn-primary', 'w-100', 'mb-3');
    addTaskButton.setAttribute('data-bs-toggle', 'modal');
    addTaskButton.setAttribute('data-bs-target', '#taskModal');
    // need to pass the project id to the modal
    addTaskButton.addEventListener('click', () => {
        document.getElementById('project-id').value = project.id;
    });

    taskContainer.appendChild(addTaskButton);


    return taskContainer;
}