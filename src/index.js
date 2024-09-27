import "./styles.css";
import { Todos } from "./todos.js";
import { Display } from "./display.js";



Todos.addTodo({
    title: 'a',
    description: 'This is a work',
    dueDate: new Date(2024, 9, 1),
    priority: 'medium',
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



console.table(Todos.todos);

// Todos.deleteTodo("c");
// console.table(Todos.todos);

// Todos.setDone("b");
// console.table(Todos.todos)

// Todos.setDone("a");
// console.table(Todos.todos)

// Todos.setPriority("a", "high");
// console.table(Todos.todos)

// Todos.setDescription("b", "This is b work");
// console.table(Todos.todos);