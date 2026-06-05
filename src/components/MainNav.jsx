import { navigateTo } from '../navigation.js';

export function MainNav({ pages, currentSlug }) {
  return (
    <nav className="main-nav" aria-label="Navigation principale">
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
  );
}
