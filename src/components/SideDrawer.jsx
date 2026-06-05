import { navigateTo } from '../navigation.js';

export function SideDrawer({ pages, currentSlug, open, onClose }) {
  return (
    <>
      <button
        className={`drawer-backdrop${open ? ' is-open' : ''}`}
        type="button"
        aria-label="Fermer le menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />

      <aside className={`side-drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav className="side-drawer__nav" aria-label="Navigation principale">
          {pages.map((page) => (
            <a
              key={page.slug}
              href={page.path}
              className={page.slug === currentSlug ? 'is-active' : ''}
              aria-current={page.slug === currentSlug ? 'page' : undefined}
              onClick={(event) => navigateTo(event, page.path)}
            >
              {page.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
