export function AppHeader({ profile, onMenuClick }) {
  return (
    <header className="app-header">
      <button
        className="menu-button"
        type="button"
        aria-label="Ouvrir le menu"
        onClick={onMenuClick}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <div className="app-header__identity" aria-label="Identité">
        <strong>{profile.firstName} {profile.lastName}</strong>
        <span>(</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <span>)</span>
      </div>
    </header>
  );
}
