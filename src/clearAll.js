import { Todos } from "./todos.js";

export function clearAll () {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.remove();
    })

    Todos.deleteAll();

}