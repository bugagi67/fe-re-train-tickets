import { Link } from "react-router-dom";
import styles from "./Logo.module.css"

interface LogoProps {
    textLogo: string,
    type: string,
}

export const Logo = ( {textLogo, type}: LogoProps ) => {
  return (
    <div
      style={{
        padding: `${type === "header" ? "0 13.5%" : "0"}`,
        backgroundColor: `${type === "header" ? "rgba(0, 0, 0, 0.6)" : "none"}`,
      }}
      className={styles.logo}
    >
      <Link to={"/"}>
        <h1>{textLogo}</h1>
      </Link>
    </div>
  );
};
