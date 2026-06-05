import { getRouteHref, navigateTo } from '../navigation.js';

export function SubNav({ page, items, activeTab }) {
  const navItems = items || page.tabs;

  return (
    <nav className="sub-nav" aria-label={`Navigation interne ${page.label}`}>
      {navItems.map((tab) => {
        const target = `${page.path}?vue=${tab.id}`;

        return (
          <a
            key={tab.id}
            href={getRouteHref(target)}
            className={tab.id === activeTab ? 'is-active' : ''}
            aria-current={tab.id === activeTab ? 'page' : undefined}
            onClick={(event) => navigateTo(event, target)}
          >
            {tab.label}
          </a>
        );
      })}
    </nav>
  );
}
