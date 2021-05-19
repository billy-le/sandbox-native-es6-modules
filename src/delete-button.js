export function createDeleteButton() {
  const button = document.createElement('button');
  button.type = 'button';
  button.innerText = 'delete';
  button.style.marginLeft = '8px';
  return button;
}
