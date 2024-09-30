import { format, formatDistance, formatRelative, subDays, isDate } from "date-fns";

class Todos {

    static todos = []

    static addTodo({
        title,
        description = "",
        dueDate = new Date(),
        priority = 'medium',
        isDone = false,
        checklist = []
    }) {
        
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
    
        if (!Array.isArray(checklist)) {
            throw new Error('Checklist must be an array');
        }
        
        const newTodo = {
            title: title,
            description: description,
            dueDate: dueDate,
            formattedDueDate: format(dueDate, 'dd-MM-yyyy'),
            priority: priority,
            isDone: isDone,
            checklist: checklist
        }
        
        this.todos.push(newTodo);
        console.log(`Added ${title} to todo list.`)
    }

    static renameTitle(title, newTitle) {
        this.todos.forEach(item => {
            if (item.title === title) {
                item.title = newTitle;
                console.log(`Todo "${title}" changed to "${newTitle}"`)
            }
        })
    }

    static modifyChecklist(title, [...checklist]) {
        this.todos.forEach(item => {
            if (item.title === title){
                item.checklist = checklist;
                console.log(`Todo "${title}" checklist was modified.`)
            }
        })
    }

    static changeDuedate(title, newDuedate){
        if (newDuedate instanceof Date && !isNaN(newDuedate)) {
            let found = false;
            this.todos.forEach(item => {
                if(item.title === title) {
                    item.dueDate = new Date(newDuedate);
                    item.formattedDueDate = format(newDuedate, 'dd-MM-yyyy');
                    found = true;
                    console.log(`Todo ${title}'s due date change to ${newDuedate}.`);
                }
            });
            if (!found) {
                console.log(`Todo with title "${title}" not found.`);
            }
        } else {
            throw new Error('New due date must be a date Object')
        }
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

    static deleteAll() {
        this.todos = [];
        console.log(`All todos are cleared!`)
    }

    static setDescription(title, description) {
        this.todos.forEach(item => {
            if (item.title === title) {
                item.description = description;
                console.log(`Todo ${title}'s description: ${description}`)
            }
        })
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

    static filterByPriority(priority) {
        console.log(`Following are todos with "${priority}" priority`);
        const filteredTodos =  this.todos.filter(todo => todo.priority === priority);
        return filteredTodos;
    }

}

export { Todos }