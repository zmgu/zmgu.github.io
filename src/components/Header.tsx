const NAV_ITEMS = [
  { name: 'About', id: 'hero' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
] as const;

interface HeaderProps {
  activeSection: string;
  onScrollTo: (id: string) => void;
}

export default function Header({ activeSection, onScrollTo }: HeaderProps) {
  return (
    <header className="header">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="header-logo">{''}</div>
        <nav className="flex gap-4 sm:gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.name}
              onClick={() => onScrollTo(item.id)}
              className={`nav-btn ${activeSection === item.name ? 'nav-btn--active' : ''}`}
            >
              {item.name}
              <div className={`nav-underline ${activeSection === item.name ? 'nav-underline--active' : ''}`} />
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
