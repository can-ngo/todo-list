
export function addNewModal () {
    
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'flex';
    overlay.innerHTML = 
    `
        <form id="todo-form" action="/" method="post">
            <h3>Add New Todo</h3>
            <p>
                <label for="todo-title"><strong>Title</strong></label><br>
                <input type="text" id="todo-title" name="todoTitle" required>
            </p>
            <p>
                <label for="todo-description"><strong>Description</strong></label><br>
                <textarea id="todo-description" name="todoDescription"></textarea>
            </p>
            <p>
                <label for="todo-duedate"><strong>Due date</strong></label><br>
                <input type="date" id="todo-duedate" name="todoDuedate">
            </p>
            <div>
                <p><strong>Priority</strong></p>
                <input type="radio" id="todo-priority-high" name="todoPriority" value="high">
                    <label for="todo-priority-high">High</label>
                <input type="radio" id="todo-priority-medium" name="todoPriority" value="medium" checked>
                    <label for="todo-priority-medium">Medium</label>
                <input type="radio" id="todo-priority-low" name="todoPriority" value="low">
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
                <button id="add-newtodo-btn" type="button">Finish</button>
                <button id="close-modal-btn" type="button">Close</button>
            </p>
        </form>
    `
    const todoForm = document.querySelector('#todo-form')
    const addNewTodoBtn = document.querySelector('#add-newtodo-btn');
    const closeModalBtn = document.querySelector('#close-modal-btn');
    const todoTitle = document.querySelector('#todo-title');
    const todoDescription = document.querySelector('#todo-description');
    const todoDuedate = document.querySelector('#todo-duedate');
    const todoPriorities = document.querySelectorAll('input[name="todoPriority"]');
    const addChecklistBtn = document.querySelector('#add-checklist-btn');
    const checklistInput = document.querySelector('#todo-checklist-input');
    const checklistContainer = document.querySelector('#checklist-items');

    return { todoForm,
             addNewTodoBtn,
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