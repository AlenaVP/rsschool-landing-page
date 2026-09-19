export function createElementFromTemplate(htmlString) {
  const template = document.createElement('template');
  template.innerHTML = htmlString.trim();
  return template.content.firstElementChild;
}

export function mountChild(root, selector, child) {
  const placeholder = root.querySelector(selector);
  if (placeholder) placeholder.replaceWith(child);
  return root;
}
