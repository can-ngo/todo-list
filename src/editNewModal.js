import { format } from "date-fns";
import { Todos } from "./todos.js";
import { displayTodos } from "./displayTodos.js";

export function editModal (todo, index) {
    
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'flex';
    overlay.innerHTML = 
    `
        <form id="edit-todo-form" action="/" method="post">
            <h3>Edit Todo</h3>
            <p>
                <label for="todo-title"><strong>Title</strong></label><br>
                <input type="text" id="todo-title" name="todoTitle" value="${todo.title}" required>
            </p>
            <p>
                <label for="todo-description"><strong>Description</strong></label><br>
                <textarea id="todo-description" name="todoDescription">${todo.description}</textarea>
            </p>
            <p>
                <label for="todo-duedate"><strong>Due date</strong></label><br>
                <input type="date" id="todo-duedate" name="todoDuedate" value="${format(todo.dueDate,'yyyy-MM-dd')}">
            </p>
            <div>
                <p><strong>Priority</strong></p>
                <input type="radio" id="todo-priority-high" name="todoPriority" value="high" ${todo.priority === 'high'? 'checked' : ''}>
                    <label for="todo-priority-high">High</label>
                <input type="radio" id="todo-priority-medium" name="todoPriority" value="medium" ${todo.priority === 'medium'? 'checked' : ''}>
                    <label for="todo-priority-medium">Medium</label>
                <input type="radio" id="todo-priority-low" name="todoPriority" value="low" ${todo.priority === 'low'? 'checked' : ''}>
                    <label for="todo-priority-low">Low</label>
            </div>
            <p>
                <label for="todo-checklist"><strong>Checklist</strong></label><br>
                <input type="text" id="todo-checklist-input" name="checklist[]" style="width:90%;" placeholder="Add checklist item">
                <button id="add-checklist-btn">+</button>
                <div id="checklist-items">
                </div>
            </p>
            <p>
                <button id="edit-todo-btn" type="button">Finish</button>
                <button id="close-modal-btn" type="button">Close</button>
            </p>
        </form>
    `
    const editTodoBtn = document.querySelector('#edit-todo-btn');
    const closeModalBtn = document.querySelector('#close-modal-btn');
    const todoTitle = document.querySelector('#todo-title');
    const todoDescription = document.querySelector('#todo-description');
    const todoDuedate = document.querySelector('#todo-duedate');
    const todoPriorities = document.querySelectorAll('input[name="todoPriority"]');
    const addChecklistBtn = document.querySelector('#add-checklist-btn');
    const checklistInput = document.querySelector('#todo-checklist-input');
    const checklistContainer = document.querySelector('#checklist-items');

    let selectedPriority;
    let checklistArray = [];

    closeModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.style.display = 'none'
    })

    todoPriorities.forEach( radio => {
        radio.addEventListener('change', () => {  
            selectedPriority = radio.value;
        })
    })

    addChecklistBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const itemText = checklistInput.value.trim();
        
        if (itemText !== "") {
            // Create a new div to hold the checklist item and remove button
            const checklistItemDiv = document.createElement('div');
            checklistItemDiv.classList.add('checklist-item');
            
            // Create a new input element for the checklist item
            const checklistItemInput = document.createElement('input');
            checklistItemInput.type = 'text';
            checklistItemInput.name = 'checklist[]'; // Name array to group items
            checklistItemInput.value = itemText;
            checklistItemInput.readOnly = true;
            checklistItemInput.style.width = '90%';
            checklistItemInput.placeholder = 'Add checklist item';
            
            // Create a remove button
            const removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.textContent = '-';
            removeBtn.addEventListener('click', function() {
                // checklistContainer.removeChild(checklistItemDiv);
                checklistItemDiv.remove();
            });
            
            // Append the input and remove button to the div
            checklistItemDiv.appendChild(checklistItemInput);
            checklistItemDiv.appendChild(removeBtn);
            
            // Append the div to the checklist container
            console.log(checklistInput.parentElement);
            checklistInput.insertAdjacentElement('beforebegin', checklistItemDiv);
            
            // Clear the input field for the next item
            checklistInput.value = '';
        }
        
        const checklistItems = document.querySelectorAll('input[name="checklist[]"]');
        checklistArray = Array.from(checklistItems).map(item => item.value);
        checklistArray = checklistArray.filter(item => item !== "");
    })

    editTodoBtn.addEventListener('click', (e) => {
        e.preventDefault();

        Todos.renameTitle(todo.title, todoTitle.value);
        Todos.setDescription(todo.title, todoDescription.value);
        Todos.changeDuedate(todo.title, new Date(todoDuedate.value));
        Todos.setPriority(todo.title, selectedPriority);
        Todos.modifyChecklist(todo.title, checklistArray);

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.remove();
        })

        displayTodos(Todos.todos);

        overlay.style.display = 'none'
        console.table(Todos.todos);
    })

    return { 
             editTodoBtn,
             closeModalBtn,
             overlay,
             todoTitle,
             todoDescription,
             todoDuedate,
             todoPriorities,
             addChecklistBtn,
             checklistInput,
             checklistContainer }
}