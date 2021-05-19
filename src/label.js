export function createLabel(todo) {
  const label = document.createElement('label');
  label.style.display = 'inline-flex';
  label.style.alignItems = 'center';
  label.innerText = todo;
  return label;
}
