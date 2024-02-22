import { showTasks } from "../DOMbuild.js/showTasks";
import { projectManager } from "../classes/projectManager";

export function editTask (title, desc, dueDate, priority, index, projectID) {
    
    projectManager.editTask(title, desc, dueDate, priority, index, projectID);
    console.log('Task edited');
    const project = projectManager.projectList.find(p => p.id === projectID);
    console.log('From EditTask.js Project:', project);
    // Display the updated list of tasks
    showTasks(project);

}