export class ProjectManager {
    constructor() {
        // Load existing projects from localStorage or initialize an empty array if none exist
        const savedProjects = localStorage.getItem('projects');
        this.projectList = savedProjects ? JSON.parse(savedProjects) : [];
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
}

export const projectManager = new ProjectManager(); // Create a single instance of the ProjectManager class to be used throughout the app   