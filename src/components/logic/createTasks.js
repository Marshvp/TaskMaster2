import { showTasks } from "../DOMbuild.js/showTasks";
import { projectManager } from "../classes/projectManager";
import { Task } from "../classes/tasks";


// create new tasks and append it to the project.tasks array
export function createTasks(title, desc, dueDate, priority, projectId) {
    const task = new Task(title, desc, dueDate, priority);
    console.log('Task:', task);
    if (task) {
        console.log('Task Created');
        const projectIdnum = parseInt(projectId);
        
        // Find the project by ID. I was passing the project ID as a string, so I had to convert it to a number
        const project = projectManager.getProjects().find(p => p.id === projectIdnum);
        console.log('Project:', project);
        if (project) {
            project.addTask(task); // Add the task to the project
            projectManager.saveProjects(); // Save the updated list of projects to localStorage
            console.log('Task created and added to project:', project);
            showTasks(project); // Display the updated list of tasks
        } else {
            console.error('Project not found');
        }
    } else {
        console.error('Task not created');
    }
 
}