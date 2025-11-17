export default function Navigation({ activeSection, onSectionChange }: {
  activeSection: string;
  onSectionChange: (section: string) => void;
}) {
  const navItems = [
    { id: 'home', label: 'Home', },
    { id: 'about', label: 'About', },
    { id: 'contact', label: 'Contact', },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map((item) => {
          return (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
              >
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}