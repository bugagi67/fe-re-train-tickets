import { Button } from "../../ui/Button/Button";
import first from "./assets/service1.svg";
import second from "./assets/service2.svg";
import last from "./assets/service3.svg";
import styles from "./Service.module.css";

export const Service = () => {
  return (
    <section id="service" className={styles.service}>
      <div className={styles.wrapper_service}>
        <div className={styles.service_title}>
          <h2>КАК ЭТО РАБОТАЕТ</h2>
          <Button
            title={"Узнать больше"}
            style={{ border: "1px solid #fff", color: "#fff" }}
          />
        </div>
        <div className={styles.wrapper_figure}>
          <figure>
            <img src={first} alt="" />
            <figcaption>Удобный заказ на сайте</figcaption>
          </figure>
          <figure>
            <img src={second} alt="" />
            <figcaption>Нет необходимости ехать в офис</figcaption>
          </figure>
          <figure>
            <img src={last} alt="" />
            <figcaption>Огромный выбор направлений</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
