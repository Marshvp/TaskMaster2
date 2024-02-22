import { editTask } from "../logic/editTask";
import * as bootstrap from 'bootstrap';
import { editmodalInstance } from "./showTasks";

export function editTaskModal (task, index) {
    
    //create base modal template
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = 'editTaskModal';
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-labelledby', 'editTaskModalLabel');
    modal.setAttribute('aria-hidden', 'true');
    document.body.appendChild(modal);

    //create modal dialog
    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog');
    modal.appendChild(modalDialog);

    //create modal content
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalDialog.appendChild(modalContent);

    //create modal header
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalContent.appendChild(modalHeader);

    //create modal title
    const modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.id = 'editTaskModalLabel';
    modalTitle.textContent = 'Edit Task';
    modalHeader.appendChild(modalTitle);

    //create close button
    const closeButton = document.createElement('button');
    closeButton.classList.add('btn-close');
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');
    modalHeader.appendChild(closeButton);

    //create modal body
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body', 'editmodal-body');
    modalContent.appendChild(modalBody);

}

export function updateEditModal(task, index) {

    //append relavent data to modal before showing

    // find moadal body
    const modalBody = document.getElementById('editTaskModal').querySelector('.editmodal-body');

    if (modalBody) {
        //clear modal body
        modalBody.innerHTML = '';
        console.log('modal body cleared');
    }



    //create form
    const form = document.createElement('form');
    form.id = 'editTaskForm';
    modalBody.appendChild(form);

    //task titleDiv
    const titleDiv = createDivmb3();
    form.appendChild(titleDiv);

    //task descDiv
    const descDiv = createDivmb3();
    form.appendChild(descDiv);

    //task due dateDiv
    const dueDateDiv = createDivmb3();
    form.appendChild(dueDateDiv);

    //task priorityDiv
    const priorityDiv = createDivmb3();
    form.appendChild(priorityDiv);

    
    //task title label
    const titleLabel = document.createElement('label');
    titleLabel.classList.add('form-label');
    titleLabel.setAttribute('for', 'task-title');
    titleLabel.textContent = `Editing title For: "${task.title}"`;
    titleDiv.appendChild(titleLabel);

    //task title input
    const titleInput = document.createElement('input');
    titleInput.classList.add('form-control');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'task-title');
    titleInput.setAttribute('required', '');
    titleInput.value = `${task.title}`;
    titleInput.setAttribute('placeholder', `${task.title}`);
    titleDiv.appendChild(titleInput);

    //task desc label
    const descLabel = document.createElement('label');
    descLabel.classList.add('form-label');
    descLabel.setAttribute('for', 'task-desc');
    descLabel.textContent = `Editing description`;
    descDiv.appendChild(descLabel);

    //task desc input
    const descInput = document.createElement('textarea');
    descInput.classList.add('form-control');
    descInput.setAttribute('id', 'task-desc');
    descInput.setAttribute('required', '');
    descInput.textContent = `${task.desc}`;
    descDiv.appendChild(descInput);

    //task due date label
    const dueDateLabel = document.createElement('label');
    dueDateLabel.classList.add('form-label');
    dueDateLabel.setAttribute('for', 'task-due-date');
    dueDateLabel.textContent = `Editing due date`;
    dueDateDiv.appendChild(dueDateLabel);

    //task due date input
    const dueDateInput = document.createElement('input');
    dueDateInput.classList.add('form-control');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('id', 'task-due-date');
    dueDateInput.setAttribute('required', '');
    dueDateInput.value = `${task.dueDate}`;
    dueDateDiv.appendChild(dueDateInput);

    //task priority label
    const priorityLabel = document.createElement('label');
    priorityLabel.classList.add('form-label');
    priorityLabel.setAttribute('for', 'task-priority');
    priorityLabel.textContent = `Editing priority`;
    priorityDiv.appendChild(priorityLabel);

    //task priority select
    const prioritySelect = document.createElement('select');
    prioritySelect.classList.add('form-select');
    prioritySelect.setAttribute('id', 'task-priority');
    prioritySelect.setAttribute('required', '');
    priorityDiv.appendChild(prioritySelect);

    //task priority options
    const lowOption = document.createElement('option');
    const mediumOption = document.createElement('option');
    const highOption = document.createElement('option');
    lowOption.setAttribute('value', 'low');
    lowOption.textContent = 'Low';
    mediumOption.setAttribute('value', 'medium');
    mediumOption.textContent = 'Medium';
    highOption.setAttribute('value', 'high');
    highOption.textContent = 'High';
    prioritySelect.appendChild(lowOption);
    prioritySelect.appendChild(mediumOption);
    prioritySelect.appendChild(highOption);

    //task priority default value
    prioritySelect.value = `${task.priority}`;

    //save button
    const saveButton = document.createElement('button');
    saveButton.classList.add('btn', 'btn-primary');
    saveButton.setAttribute('type', 'button');
    saveButton.setAttribute('id', `${index}`);
    saveButton.textContent = 'Save';
    modalBody.appendChild(saveButton);

    //event listener for save button
    saveButton.addEventListener('click', (event) => {
        event.preventDefault();
        const title = document.getElementById('task-title').value;
        const desc = document.getElementById('task-desc').value;
        const dueDate = document.getElementById('task-due-date').value;
        const priority = document.getElementById('task-priority').value;
        console.log(title);
        editTask(title, desc, dueDate, priority, index);
        
        //close modal
        editmodalInstance.hide();
    });


} 

function createDivmb3() {
    const div = document.createElement('div');
    div.classList.add('mb-3');
    return div;
}