
export function addNewModal () {
    
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'flex';
    overlay.innerHTML = 
    `
        <form action="/" method="post">
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
            <p>
                <div>
                    <p>Priority</p>
                    <input type="radio" id="todo-priority-high" name="todoPriority" value="high" checked>
                        <label for="todo-priority-high">High</label>
                    <input type="radio" id="todo-priority-medium" name="todoPriority" value="medium">
                        <label for="todo-priority-medium">Medium</label>
                    <input type="radio" id="todo-priority-low" name="todoPriority" value="low">
                        <label for="todo-priority-low">Low</label>
                </div>
            </p>
            <div>
                <button id="add-newtodo-btn" type="button">Finish</button>
                <button id="close-modal-btn" type "button">Close</button>
            </div>
        </form>
    `
    const addNewTodoBtn = document.querySelector('#add-newtodo-btn');
    const closeModalBtn = document.querySelector('#close-modal-btn');
    const todoTitle = document.querySelector('#todo-title');
    const todoDescription = document.querySelector('#todo-description');
    const todoDuedate = document.querySelector('#todo-duedate');
    const todoSelectedPriority = document.querySelector('input[name="todoPriority"]:checked');

    return { addNewTodoBtn,
             closeModalBtn,
             overlay,
             todoTitle,
             todoDescription,
             todoDuedate,
             todoSelectedPriority }
}