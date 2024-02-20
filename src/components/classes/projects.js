export class Projects {
    constructor(title, desc) {
    this.title = title;
    this.desc = desc;
    this.isCompleted = false;
    this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task)
    }
};
