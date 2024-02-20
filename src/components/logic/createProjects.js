
import { showProjects } from "../DOMbuild.js/showProjects";
import { projectManager } from "../classes/projectManager";
import { Projects } from "../classes/projects";


export function createProjects(title, description) {
    console.log('Create Projects');
    const project = new Projects(title, description);
    console.log(project);
    if (project) {
        console.log('Project Created');
        projectManager.addProject(project);
        showProjects();
        console.log(projectManager);
    } else {
        console.log('Project not created');
    }

}