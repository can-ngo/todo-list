import { Todos } from "./todos.js";

const content = document.querySelector("#content");

function displayTodos (todos) {
    todos.forEach((todo,index) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id',`todo-${index}`)
        content.appendChild(card);

        let checklistHtml = '';
        todo.checklist.forEach(item => {
            checklistHtml += `<li>${item}</li>`
        })

        card.innerHTML = 
        `
        <h3>${todo.title}</h3>
        <p><i>${todo.description}</i></p>
        <p><strong>Due:</strong> ${todo.formattedDueDate}</p>
        <p>Priority: <strong class="priority-${todo.priority}">${todo.priority}</strong></p>
        <p>${checklistHtml}</p>
        <div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
        `

        const deleteBtn = card.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove();
            Todos.deleteTodo(todo.title);
            console.table(Todos.todos);
        })
        
        const editBtn = card.querySelector('.edit-btn');
        editBtn.addEventListener('click', (e) => {
            
        })
        
    });
}

export { displayTodos }