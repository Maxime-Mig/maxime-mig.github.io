export function getRouteLocation() {
  const route = window.location.hash.slice(1) || '/';
  const [pathname, query = ''] = route.split('?');

  return {
    pathname: pathname || '/',
    search: query ? `?${query}` : '',
  };
}

export function getRouteHref(target) {
  return `#${target}`;
}

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
  const nextHash = getRouteHref(target);

  if (window.location.hash === nextHash) {
    window.dispatchEvent(new Event('portfolio:navigation'));
    return;
  }

  window.location.hash = target;
}
