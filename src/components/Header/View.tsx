import { Link } from "react-router-dom";
import { useState } from "react";
import { User } from "../../model/user";

interface Props {
  user: User | null;
  t: (key: string) => string;
  logout: () => void;
  language: string;
  onLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function View({
  user,
  t,
  logout,
  language,
  onLanguageChange
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="username">
          {t("welcome")} {user ? user.name : t("guest")}
        </span>
      </div>

      <div className="navbar-center">
        {/* Burger button for small screens */}
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              {t("home.title")}
            </Link>
          </li>
          {user == null ? (
            <>
              <li>
                <Link to="/register" onClick={closeMenu}>
                  {t("signup.title")}
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={closeMenu}>
                  {t("login.title")}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/profile" onClick={closeMenu}>
                  {t("profile.title")}
                </Link>
              </li>
              <li>
                <Link to="/top" onClick={closeMenu}>
                  {t("top.title")}
                </Link>
              </li>
              <li>
                <Link to="/search" onClick={closeMenu}>
                  {t("search.title")}
                </Link>
              </li>
              <li>
                <button className="logout-btn" onClick={() => {
                  logout();
                  closeMenu();
                }}>
                  {t("logout.title")}
                </button>
              </li>
            </>
          )}

          {/* Mobile-only language selector */}
          <li className="mobile-only">
            <select
              value={language}
              onChange={(e) => {
                onLanguageChange(e);
                setMenuOpen(false);
              }}
            >
              <option value="en">🇬🇧 English</option>
              <option value="fr">🇫🇷 Français</option>
            </select>
          </li>
        </ul>
      </div>

      <div className="navbar-right desktop-only">
        <select
          className="language-select"
          value={language}
          onChange={onLanguageChange}
        >
          <option value="en">🇬🇧 English</option>
          <option value="fr">🇫🇷 Français</option>
        </select>
      </div>
    </nav>
  );
}
