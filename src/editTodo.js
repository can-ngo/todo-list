import { Todos } from "./todos.js"

function editTodo (title, modifiedTodo) {
    // modifiedTodo is an object
    
    Todos.renameTitle(title, modifiedTodo.title)
    
    Todos.setDescription(title, modifiedTodo.description)

    Todos.changeDuedate(title, modifiedTodo.dueDate)

    Todos.setPriority(title, modifiedTodo.priority)

    Todos.modifyChecklist(title, modifiedTodo.checklist)
}

export { editTodo }