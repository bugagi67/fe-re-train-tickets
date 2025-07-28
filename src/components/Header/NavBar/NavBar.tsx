import { useNavigate, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (anchor: string) => {
    if (location.pathname === "/") {
      window.location.hash = anchor;
    } else if (location.pathname === "/search") {
      if (anchor === "#about-as" || anchor === "#contacts") {
        window.location.hash = anchor;
      } else {
        navigate(`/${anchor}`);
      }
    }
  };

  return (
    <nav className={styles.nav_bar}>
      <ul>
        <li>
          <button onClick={() => handleNavClick("#about-as")}>О нас</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("#service")}>
            Как это работает
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick("#reviews")}>Отзывы</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("#contacts")}>Контакты</button>
        </li>
      </ul>
    </nav>
  );
};
