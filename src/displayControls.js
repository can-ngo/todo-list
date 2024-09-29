const controls = document.querySelector('#control');

function displayControls() {
    controls.innerHTML = 
    `
    <button id='open-modal-btn'>Add new to-do</button>
    <label for='filter'>Filter by priority</label>
    <select id='filter'>
        <option value='all' selected>All</option>
        <option value='high'>High</option>
        <option value='medium'>Medium</option>
        <option value='low'>Low</option>
    </select>
    <button id='clearAll-btn'>Clear All</button>
    `
    
    const openModalBtn = document.querySelector('#open-modal-btn');
    const filter = document.querySelector('#filter');
    const clearAllBtn = document.querySelector('#clearAll-btn');
    return { openModalBtn, filter, clearAllBtn }
}

export { displayControls }