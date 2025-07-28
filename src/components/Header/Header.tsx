import { Logo } from "./Logo/Logo" 
import { NavBar } from "./NavBar/NavBar"
import { SearchForm } from "./SearchForm/SearchForm"
import styles from "./Header.module.css"

interface HeaderProps { 
    searchFormType: string,
}

export const Header = ({searchFormType}: HeaderProps) => {
    return (
        <header className={searchFormType === "main" ? styles.header : styles.header_default}>
            <div className={styles.background_wrapper}>
                <Logo textLogo={"Лого"} type={"header"} />
                <NavBar />
                <div className={styles.wrapper_content_header}>
                    <h1>Вся жизнь - <br /> <span>путешествие!</span></h1>
                    <SearchForm type={searchFormType} />
                </div>
            </div>
        </header>
    )
}