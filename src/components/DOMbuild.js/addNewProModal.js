// create a bootstrap modal that will be used to add new projects needs the title and description of the project

import { createProjects } from '../logic/createProjects';
import * as bootstrap from 'bootstrap';
import { showProjects } from './showProjects';

export function createProjectModal() {
    const modalHTML = `
    <div class="modal fade" id="newProModal" tabindex="-1" aria-labelledby="newProeModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newProModalLabel">New Project</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- Form to add new project -->
            <form id="newProjectForm">
              <div class="mb-3">
                <label for="project-title" class="form-label">Project Title</label>
                <input type="text" class="form-control" id="project-title" required>
              </div>
              <div class="mb-3">
                <label for="project-desc" class="form-label">Project Description</label>
                <textarea class="form-control" id="project-desc" required></textarea>
              </div>
              <button type="button" class="btn btn-primary" id="createProjectButton">Create Project</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Event listener to handle form submission
    document.getElementById('createProjectButton').addEventListener('click', (event) => {
        // Prevent the default form submission
        event.preventDefault();

        // Extract form data
        const title = document.getElementById('project-title').value;
        const description = document.getElementById('project-desc').value;
        
        // Call createProjects with the form data
        createProjects(title, description);
        

        // Optionally, close the modal after creation
        const modalInstance = bootstrap.Modal.getInstance(document.getElementById('newProModal'));
        if (modalInstance) {
            modalInstance.hide();
        }
    });
}
