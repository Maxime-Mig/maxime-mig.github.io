export function navigateTo(event, target) {
  if (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  ) {
    return;
  }

  event.preventDefault();
  window.history.pushState({}, '', target);
  window.dispatchEvent(new Event('portfolio:navigation'));
}
