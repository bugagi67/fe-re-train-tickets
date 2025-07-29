import { Link } from "react-router-dom";
import styles from "./Logo.module.css"

interface LogoProps {
  textLogo: string,
  type: string,
}

export const Logo = ({ textLogo, type }: LogoProps) => {
  return (
    <div
      style={{
        backgroundColor: `${type === "header" ? "rgba(0, 0, 0, 0.6)" : "none"}`,
      }}
      className={styles.logo}
    >
      <div className="container">
        <Link to={"/"}>
          <h1>{textLogo}</h1>
        </Link>
      </div>
    </div>
  );
};
