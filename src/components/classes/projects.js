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

    editTask(title, desc, dueDate, priority, index) {
        const taskid = index;
        console.log(this.tasks.map(t => t.id)); 
        const task = this.tasks[index]
        console.log('Task fromo Projects:', task);
        if (task) {
            task.title = title;
            task.desc = desc;
            task.dueDate = dueDate;
            task.priority = priority;
        } else {
            console.error('Task not found');
        }
    }
};
