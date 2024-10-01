import "./styles.css";

import { Todos } from "./todos.js";
import { displayTodos } from "./displayTodos.js";
import { displayControls } from "./displayControls.js";
import { addNewModal } from "./addNewModal.js";
import { clearAll } from "./clearAll.js";

const { openModalBtn, filter, clearAllBtn } = displayControls();

openModalBtn.addEventListener("click", event => {
    const { 
            addNewTodoBtn,
            overlay,
            todoTitle,
            todoDescription,
            todoDuedate,
            todoPriorities,
            addChecklistBtn,
            checklistInput } = addNewModal();

    let checklistArray = [];
    let selectedPriority; //default value is 'medium'
    
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
            // checklistContainer.appendChild(checklistItemDiv);
            // checklistContainer.insertBefore(checklistItemDiv, checklistInput.parentElement);
            
            // Clear the input field for the next item
            checklistInput.value = '';
        }
        
        const checklistItems = document.querySelectorAll('input[name="checklist[]"]');
        checklistArray = Array.from(checklistItems).map(item => item.value);
        checklistArray = checklistArray.filter(item => item !== "");
    })

    todoPriorities.forEach( radio => {
        radio.addEventListener('change', () => {  
            selectedPriority = radio.value;
        })
    })

    addNewTodoBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!todoTitle.value) {
            alert('Todo have to has title')
            return
        }

        Todos.addTodo({
            title: todoTitle.value,
            description: todoDescription.value,
            dueDate: todoDuedate.value ? new Date(todoDuedate.value) : undefined,
            priority: selectedPriority,
            checklist: checklistArray
        })

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
        card.remove();
        })

        displayTodos(Todos.todos);

        overlay.style.display = 'none'
        console.table(Todos.todos);
    })

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
    title: 'Clean house',
    description: 'My house',
    dueDate: new Date(2024, 9, 1),
    isDone: false,
    checklist: ['sweep floor', 'vacuum cleaner']
})

Todos.addTodo({
    title: 'Study Web Dev',
    dueDate: new Date(2024, 10, 15),
    priority: 'low',
    // isDone: false,
    checklist: ['learn Javascript', 'make todo project', 'learn Git']
})

Todos.addTodo({
    title: 'Take wife to doctor',
    description: 'For pregnancy check',
    priority: 'high'
})

Todos.addTodo({
    title: 'a',
    priority: 'low'
})

displayTodos(Todos.todos);
console.table(Todos.todos);

// Todos.changeDuedate('a', new Date(2020,11,3));
// console.table(Todos.todos);

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