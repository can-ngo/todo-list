import "./styles.css";

import { Todos } from "./todos.js";
import { displayTodos } from "./displayTodos.js";
import { displayControls } from "./displayControls.js";
import { addNewModal } from "./addNewModal.js";
import { clearAll } from "./clearAll.js";

const { addNewBtn, filter, clearAllBtn } = displayControls();

addNewBtn.addEventListener("click", event => {
    console.log("Hello");
    addNewModal();
})

filter.addEventListener("change", (event) => {
    const priority = event.target.value;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.remove();
    })

    if (priority === 'all') {
        displayTodos(Todos.todos);    
    } else {
        displayTodos(Todos.filterByPriority(priority));
    }
})

clearAllBtn.addEventListener("click", () => {
    clearAll();
})

Todos.addTodo({
    title: 'a',
    description: 'This is a work',
    dueDate: new Date(2024, 9, 1),
    priority: 'high',
    isDone: false,
    checklist: ['do x', 'do y', 'do z']
})

Todos.addTodo({
    title: 'b',
    description: 'This is b work',
    dueDate: new Date(2024, 9, 1),
    priority: 'medium',
    // isDone: false,
    checklist: ['do x', 'do y', 'do z']
})

Todos.addTodo({
    title: 'c'
})

Todos.addTodo({
    title: 'd'
})

Todos.addTodo({
    title: 'e'
})

Todos.addTodo({
    title: 'f',
    priority: 'high',
    dueDate: new Date(2024, 8, 30)
})

Todos.addTodo({
    title: 'g',
    priority: 'medium'
})


displayTodos(Todos.todos);
console.table(Todos.todos);


// Todos.deleteTodo("c");
// console.table(Todos.todos);

// Todos.deleteAll();
// console.table(Todos.todos);

// Todos.setDone("b");
// console.table(Todos.todos)

// Todos.setDone("a");
// console.table(Todos.todos)

// Todos.setPriority("a", "high");
// console.table(Todos.todos)

// Todos.setDescription("b", "This is b work");
// console.table(Todos.todos);

// Todos.modifyChecklist("c", ["do this", "do that"]);
// console.table(Todos.todos);