import { useEffect, useMemo, useState } from 'react';
import { portfolioData as fallbackPortfolioData } from '../shared/portfolioData.js';
import { AppHeader } from './components/AppHeader.jsx';
import { SideDrawer } from './components/SideDrawer.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { SectionPage } from './pages/SectionPage.jsx';
import { getRouteLocation } from './navigation.js';

function getLocationKey() {
  const location = getRouteLocation();
  return `${location.pathname}${location.search}`;
}

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export default function App() {
  const [portfolio, setPortfolio] = useState(fallbackPortfolioData);
  const [locationKey, setLocationKey] = useState(getLocationKey);
  const [loading, setLoading] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (!import.meta.env.DEV) {
      setLoading(false);
      return undefined;
    }

    let cancelled = false;

    fetch('/api/portfolio')
      .then((response) => {
        if (!response.ok) {
          throw new Error('API indisponible');
        }

        return response.json();
      })
      .then((data) => {
        if (!cancelled) {
          setPortfolio(data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setPortfolio(fallbackPortfolioData);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setLocationKey(getLocationKey());
      setIsDrawerOpen(false);
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('portfolio:navigation', handleLocationChange);

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('portfolio:navigation', handleLocationChange);
    };
  }, []);

  const currentPath = normalizePath(getRouteLocation().pathname);
  const currentPage = useMemo(() => {
    return portfolio.pages.find((page) => normalizePath(page.path) === currentPath) || portfolio.pages[0];
  }, [portfolio.pages, currentPath, locationKey]);

  const isHome = currentPage.slug === 'accueil';

  return (
    <div className="app-shell">
      <AppHeader
        profile={portfolio.profile}
        onMenuClick={() => setIsDrawerOpen((open) => !open)}
      />

      <SideDrawer
        pages={portfolio.pages}
        currentSlug={currentPage.slug}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      <main className="site-main" aria-live={loading ? 'polite' : 'off'}>
        {isHome ? (
          <HomePage page={currentPage} pages={portfolio.pages} loading={loading} />
        ) : (
          <SectionPage page={currentPage} loading={loading} />
        )}
      </main>
    </div>
  );
}
