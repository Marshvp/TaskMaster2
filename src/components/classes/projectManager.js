import { Projects } from './projects';
import { Task } from './tasks';
export class ProjectManager {
    constructor() {
        const savedProjects = localStorage.getItem('projects');
        if (savedProjects) {
            const projectsArray = JSON.parse(savedProjects);
            this.projectList = projectsArray.map(proj => {
                let project = new Projects(proj.title, proj.desc);
                project.id = proj.id;
                project.isCompleted = proj.isCompleted;
                project.tasks = proj.tasks.map(task => 
                    new Task(task.title, task.desc, task.dueDate, task.priority)
                ); // Re-instantiate each task as an instance of Task
                return project;
            });
        } else {
            this.projectList = [];
        }
    }
    

    addProject(project) {
        // Ensure the new project has a unique ID
        const maxId = this.projectList.reduce((max, item) => Math.max(max, item.id), 0);
        project.id = maxId + 1; // Assign a new, unique ID
        
        this.projectList.push(project); // Add the new project to the list
        this.saveProjects(); // Save the updated list to localStorage
    }

    // Deletes a project by ID and updates localStorage
    deleteProject(projectId) {
        this.projectList = this.projectList.filter(project => project.id !== projectId); // Remove the project
        this.saveProjects(); 
    }

    getProjects() {
        return this.projectList;
    }
    saveProjects() {
        localStorage.setItem('projects', JSON.stringify(this.projectList));
        console.log('Projects saved');
    }

    editTask(title, desc, dueDate, priority, index, projectID) {
        const project = this.projectList.find(p => p.id === projectID);
        if (project) {
            project.editTask(title, desc, dueDate, priority, index);
            this.saveProjects();
        } else {
            console.error('Project not found');
        }
    
    }

}

export const projectManager = new ProjectManager(); // Create a single instance of the ProjectManager class to be used throughout the app   