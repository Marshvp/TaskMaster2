import { projectManager } from '../classes/projectManager';
import  * as bootstrap from 'bootstrap';
import { addNewTaskModal } from './addNewTaskModal';
import { editTaskModal } from './editTaskModal';
import { updateEditModal } from './editTaskModal';
import { displayProjectDetails } from './showProjects';
//tasks are stored as an array in the project object. this function will display the tasks for a given project.
//if there are no tasks, it will display a h3 element with the text "No tasks to display"
//the project parameter is a project object. to access the tasks

//create edit task modal
editTaskModal();

const editTaskModalElement = document.getElementById('editTaskModal');
export const editmodalInstance = new bootstrap.Modal(editTaskModalElement, {
  backdrop: 'static' // Correctly applying the 'static' option here
});



addNewTaskModal();
export function showTasks(project) {
    if (!project || !project.tasks) {
        console.error('Invalid project data');
        return;
    }

    const projectID = project.id;
    console.log('Project ID:', projectID);
    
    let taskContainer = document.getElementById('task-container') || document.createElement('div');
    taskContainer.innerHTML = '';

    // create add task button
    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add a New Task';
    addTaskButton.classList.add('btn', 'btn-primary', 'w-100', 'mb-3');
    addTaskButton.setAttribute('data-bs-toggle', 'modal');
    addTaskButton.setAttribute('data-bs-target', '#taskModal');
    // need to pass the project id to the modal
    addTaskButton.addEventListener('click', () => {
        document.getElementById('project-id').value = projectID;
    });

    taskContainer.appendChild(addTaskButton);

    // extract tasks from project object
    let projectTasks = project.tasks;
    console.log("Project Tasks:", projectTasks);

    // if there are no tasks, display a message
    let h3 = document.createElement('h3');
    if (!projectTasks.length) {
    h3.textContent = 'No tasks to display';
    taskContainer.appendChild(h3);
    }
    else {

        const accordion = document.createElement('div');
        accordion.classList.add('accordion', 'accordion-flush');
        accordion.id = 'task-accordion';
        

        projectTasks.forEach((task, index) => {

            console.log(`Task "${index}": ${task.title}`);
            //create accoridan item
            const accordionItem = document.createElement('div');
            accordionItem.classList.add('accordion-item');
            accordionItem.id = `task-${index}`;
            accordion.appendChild(accordionItem);

            //create accordion header
            const accordionHeader = document.createElement('h2');
            accordionHeader.classList.add('accordion-header');
            accordionHeader.id = `task-${index}-header`;
            accordionItem.appendChild(accordionHeader);

            //create accoridan button
            const accordionButton = document.createElement('button');
            accordionButton.classList.add('accordion-button');
            accordionButton.setAttribute('type', 'button');
            accordionButton.setAttribute('data-bs-toggle', 'collapse');
            accordionButton.setAttribute('data-bs-target', `#task-${index}-collapse`);
            accordionButton.setAttribute('aria-expanded', 'true');
            accordionButton.setAttribute('aria-controls', `task-${index}-collapse`);
            accordionButton.textContent = task.title;
            // change color based on priority
            if (task.priority === 'High' || task.priority === 'high') {
                accordionButton.classList.add('bg-danger', 'text-white');
            } else if (task.priority === 'Medium' || task.priority === 'medium') {
                accordionButton.classList.add('bg-warning', 'text-dark');
            } else {
                accordionButton.classList.add('bg-success', 'text-white');
            }
            accordionHeader.appendChild(accordionButton);

            //create accordion content
            const accordionContent = document.createElement('div');
            accordionContent.classList.add('accordion-collapse', 'collapse', 'container');
            accordionContent.id = `task-${index}-collapse`;
            accordionContent.setAttribute('aria-labelledby', `task-${index}-header`);
            accordionContent.setAttribute('data-bs-parent', '#task-accordion');
            accordionItem.appendChild(accordionContent);

            //create accordion body
            const accordionBody = document.createElement('div');
            accordionBody.classList.add('accordion-body');
            accordionContent.appendChild(accordionBody);

            //create task desc
            const taskDescription = document.createElement('p');
            taskDescription.textContent = task.desc;
            accordionBody.appendChild(taskDescription);

            //create p for edit button
            const editBP = document.createElement('p');
            accordionBody.appendChild(editBP);

            //create edit button under accordion body
            const editButton = document.createElement('button');
            editButton.classList.add('btn', 'btn-primary');
            editButton.id = `edit-task-${index}`;
            editButton.textContent = 'Edit';
            editBP.appendChild(editButton);

            //create due date
            const dueDate = document.createElement('p');
            dueDate.textContent = `Due Date: ${task.dueDate}`;
            accordionBody.appendChild(dueDate);

            //create priority
            const priority = document.createElement('p');
            priority.textContent = `Priority: ${task.priority}`;
            accordionBody.appendChild(priority);

            //create p for mark complete button and delete button
            const markCompleteDeleteP = document.createElement('p');
            accordionBody.appendChild(markCompleteDeleteP);

            //create mark complete button if checked = false
            if (!task.checked) {
                const markCompleteButton = document.createElement('button');
                markCompleteButton.classList.add('btn', 'btn-success', 'mt-3');
                markCompleteButton.id = `mark-complete-${index}`;
                markCompleteButton.textContent = 'Mark Complete';

                //add event listener to mark complete button
                markCompleteButton.addEventListener('click', () => {
                    console.log(`Mark complete button clicked for task ${index}`);
                    //toggle checked property
                    task.checked = !task.checked;
                    //update project in local storage
                    const project = projectManager.getProjects().find(p => p.id === projectID);
                    projectManager.saveProjects();
                    //update the display
                    displayProjectDetails(project);
                });

                markCompleteDeleteP.appendChild(markCompleteButton);
            } else {
                //show text saying task is complete
                const taskComplete = document.createElement('p');
                taskComplete.textContent = 'Task Complete';
                markCompleteDeleteP.appendChild(taskComplete);
            }

            //create delete button
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn', 'btn-danger', 'mt-3', 'ms-3');
            deleteButton.id = `delete-task-${index}`;
            deleteButton.textContent = 'Delete';
            markCompleteDeleteP.appendChild(deleteButton);

            //event listener for edit button
            editButton.addEventListener('click', () => {
                //call editTaskModal
                updateEditModal(task, index, projectID);
                console.log("Edit button clicked");
                
                editmodalInstance.show();
            });

            //event listener for delete button
            deleteButton.addEventListener('click', () => {
                console.log(`Delete button clicked for task ${index}`);
                //remove task from project
                projectTasks.splice(index, 1);
                //update project in local storage
                const project = projectManager.getProjects().find(p => p.id === projectID);
                projectManager.saveProjects();
                //update the display
                displayProjectDetails(project);
            });
            


        })
    
        taskContainer.appendChild(accordion);
    }




    


    return taskContainer;
}