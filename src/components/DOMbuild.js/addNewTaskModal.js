import * as bootstrap from 'bootstrap';
import { createTasks } from '../logic/createTasks';
import { displayProjectDetails } from "./showProjects";
import { projectManager } from "../classes/projectManager";

export function addNewTaskModal() {
    const modalHTML = `
    <div class="modal fade" id="taskModal" tabindex="-1" aria-labelledby="taskModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="taskModalLabel">New Task</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="newTaskForm">
                    <div class="mb-3">
                        <label for="task-title" class="form-label">Task Title</label>
                        <input type="text" class="form-control" id="task-title" required>
                    </div>
                    <div class="mb-3">
                        <label for="task-desc" class="form-label">Task Description</label>
                        <textarea class="form-control" id="task-desc" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="task-due-date" class="form-label">Due Date</label>
                        <input type="date" class="form-control" id="task-due-date" required>
                    </div>
                    <div class="mb-3">
                        <label for="task-priority" class="form-label">Priority</label>
                        <select class="form-select" id="task-priority" required>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <input type="hidden" id="project-id">
                    <button type="button" class="btn btn-primary" id="createTaskButton">Create Task</button>
                </form>
            </div>
        </div>
    </div>
    `;


    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Event listener to handle form submission for new task add logic will be added in ../logic/createTask.js
    document.getElementById('createTaskButton').addEventListener('click', (event) => {
        // Prevent the default form submission
        event.preventDefault();


        // Extract form data
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-desc').value;
        const dueDate = document.getElementById('task-due-date').value;
        const priority = document.getElementById('task-priority').value;
        const projectId = document.getElementById('project-id').value;
        console.log(projectId);
        // Call createTask with the form data
        createTasks(title, description, dueDate, priority, projectId);
        // get project from project manager
        const project = projectManager.projectList.find(project => project.id === projectId);
        displayProjectDetails(project);

        // Optionally, close the modal after creation
        const modalInstance = bootstrap.Modal.getInstance(document.getElementById('taskModal'));
        if (modalInstance) {
            modalInstance.hide();
        }
    });
    

}