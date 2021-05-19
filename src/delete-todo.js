export function handleDelete(e) {
  const item = this.parentNode.parentNode;
  if (item) {
    item.remove();
  }
}
