import { Logo } from "../../Header/Logo/Logo";
import pageUp from "./pageup.svg";
import styles from "../Footer.module.css"

export const Bottom = () => {
  return (
    <div className={styles.bottom}>
      <div className={styles.bottom_wrapper}>
        <Logo textLogo={"Лого"} type={"bottom"} />
        <img
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
          src={pageUp}
          alt="Кнопка вверх"
        />
        <div>2025 WEB</div>
      </div>
    </div>
  );
};
