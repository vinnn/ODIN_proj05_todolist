
export class Project {
    constructor(name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
    }
    
}



export class Item {
    constructor(project, name, description, dueDate, priority, done) {
        this.project = project;
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = done
    }



}
