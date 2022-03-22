
export class Project {
    constructor(name, items_array) {
        this.name = name;
        this.items = items_array;
    }
    
    getName() {
        return this.name;
    }
    
}



export class Item {
    constructor(name, description, dueDate, priority, done) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = done
    }



}
