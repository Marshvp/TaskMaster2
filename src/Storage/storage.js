export function saveProjects(projects) {
    //save to local storage
    localStorage.setItem('projects', JSON.stringify(projects));
    
}