import { navigation } from '../data/portfolio';

interface HeaderProps {
  activeSection: string;
  onScrollTo: (id: string) => void;
}

export default function Header({ activeSection, onScrollTo }: HeaderProps) {
  return (
    <header className="header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="header-logo" />
        <nav className="flex gap-4 sm:gap-8">
          {navigation.map((item) => (
            <button
              key={item.label}
              onClick={() => onScrollTo(item.id)}
              className={`nav-btn ${activeSection === item.label ? 'nav-btn--active' : ''}`}
            >
              {item.label}
              <div className={`nav-underline ${activeSection === item.label ? 'nav-underline--active' : ''}`} />
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
