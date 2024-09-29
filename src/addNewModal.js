
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
            <button id="add-newtodo-button" type="button">Finish</button>
            <i id="close-btn" class="fa-solid fa-circle-xmark" style="color: red;"></i>
        </form>
    `
}