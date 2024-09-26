class Todos {
    content = document.querySelector("#content");

    static todos = []

    static addTodo(title, description, dueDate, priority = 'low', isDone = false) {
        if (typeof title !== 'string' || typeof description !== 'string') {
            throw new Error('Title and description must be strings');
        }
        if (!(dueDate instanceof Date)) {
            throw new Error('Due date must be a Date object');
        }
        if (!['low','medium','high'].includes(priority)) {
            throw new Error('Priority must be either "low", "medium" or "high"');
        }
        if (typeof isDone !== 'boolean') {
            throw new Error('isDone must be a boolean');
        }

        const newTodo = {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            isDone: isDone
        }
        this.todos.push(newTodo);
        console.log(`Added ${title} to todo list.`)
    }

    static deleteTodo(title) {
        if (!isNaN(title)) {
            if (title >= 0 && title <= this.todos.length){
                this.todos.splice(title,1);
                console.log(`Remove todo at index ${title}`)
            } else {
                console.log(`Index ${title} is out of range.`)
            }
        } else {
            const initialLength = this.todos.length;
            this.todos = this.todos.filter( item => item.title !== title);
            if (this.todos.length < initialLength) {
                console.log(`Removed 1 todo with title: ${title}`);
            } else {
                console.log(`No todo found with title: ${title}`);
            }
        }
    }

    static setDone(title) {
        this.todos.forEach( item => {
            if (item.title === title) {
                item.isDone = true;
                console.log(`Todo "${title}" is marked as done.`);
            }
        })
    }

    static setUndone(title) {
        this.todos.forEach( item => {
            if (item.title === title) {
                item.isDone = false;
                console.log(`Todo "${title}" is marked as undone.`)
            }
        })
    }

    static setPriority(title, priorityLevel) {
        this.todos.forEach( item => {
            if (item.title === title) {
                item.priority = priorityLevel;
                console.log(`Todo "${title}" priority set to "${priorityLevel}"`)
            }
        })
    }

    static setDescription(title, description) {
        this.todos.forEach(item => {
            if (item.title === title) {
                item.description = description;
                console.log(`Todo ${title}'s description: ${description}`)
            }
        })
    }
}

export { Todos }