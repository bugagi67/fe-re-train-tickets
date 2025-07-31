import {Logo} from "./Logo/Logo"
import {NavBar} from "./NavBar/NavBar"
import {SearchForm} from "./SearchForm/SearchForm"
import {useLocation} from "react-router-dom";
import styles from "./Header.module.css"

export const Header = () => {
  const location = useLocation();
  return (
    <header className={location.pathname === "/" ? styles.header : styles.header_default}>
      <div className={styles.background_wrapper}>
        <Logo textLogo={"Лого"} type={"header"}/>
        <NavBar/>
        <div className={styles.wrapper_content_header}>
          {location.pathname === "/" ? <h1>Вся жизнь - <br/> <span>путешествие!</span></h1> : null}
          <SearchForm />
        </div>
      </div>
    </header>
  )
}