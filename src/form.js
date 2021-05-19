import { handleDelete } from './delete-todo.js';
import { createDeleteButton } from './delete-button.js';
import { createLabel } from './label.js';
import { createListItem } from './list-item.js';
import { createCheckbox } from './checkbox.js';

export function handleFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const { todo } = Object.fromEntries(formData.entries());
  if (todo) {
    const list = document.getElementById('todos');
    const item = createListItem();
    const checkbox = createCheckbox();
    const label = createLabel(todo);
    const deleteButton = createDeleteButton();

    list.appendChild(item);
    item.appendChild(label);
    label.insertAdjacentElement('afterbegin', checkbox);
    label.insertAdjacentElement('beforebegin', deleteButton);

    deleteButton.addEventListener('click', handleDelete);

    const input = document.getElementById('add');
    if (input) {
      input.value = '';
      input.focus();
    }
  }
}
