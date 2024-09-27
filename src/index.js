import "./styles.css";
import { Todos } from "./todos.js";
import { Display } from "./display.js";



Todos.addTodo("a", "a work here", new Date(2024,8,24),'low',false,['do x', 'do y', 'do z']);
Todos.addTodo("b", "have to do b also", new Date(2019,3,13));
Todos.addTodo("c", "This is c work", new Date(2023,12,20),'medium');
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