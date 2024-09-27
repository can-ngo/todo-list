const content = document.querySelector("#content");

function displayTodos (todos) {
    todos.forEach(todo => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        content.appendChild(card);

        let checklistHtml = '';
        todo.checklist.forEach(item => {
            checklistHtml += `<li>${item}</li>`
        })

        card.innerHTML = 
        `
        <h3>${todo.title}</h3>
        <p>Priority: <strong class="priority-${todo.priority}">${todo.priority}</strong></p>
        <p>${todo.description}</p>
        <p>Due: ${todo.formattedDueDate}</p>
        <p>${checklistHtml}</p>
        <div>
            <button>Change priority</button>
            <button>Delete</button>
        </div>
        `
    });
}

export { displayTodos }