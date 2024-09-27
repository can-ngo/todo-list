const controls = document.querySelector('#control');

function displayControls() {
    controls.innerHTML = 
    `
    <button>Add new to-do</button>
    <button>Filter by priority</button>
    `
}

export { displayControls }