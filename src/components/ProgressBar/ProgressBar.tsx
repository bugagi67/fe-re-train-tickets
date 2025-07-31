import styles from "./ProgressBar.module.css"
import { useProgressStep } from "./helper/useProgressStep.ts";

export const ProgressBar = () => {
  const step = useProgressStep();

  return (
    <div className={styles.progress_bar}>
      <div className={`${styles.progress_step} ${step >= 1 && styles.active}`}>
        <span className={styles.step_number}>1</span>
        <span className={styles.step_text}>Билеты</span>
      </div>
      <div className={`${styles.progress_step} ${step >= 2 && styles.active}`}>
        <span className={styles.step_number}>2</span>
        <span className={styles.step_text}>Пассажиры</span>
      </div>
      <div className={`${styles.progress_step} ${step >= 3 && styles.active}`}>
        <span className={styles.step_number}>3</span>
        <span className={styles.step_text}>Оплата</span>
      </div>
      <div className={`${styles.progress_step} ${step >= 4 && styles.active}`}>
        <span className={styles.step_number}>4</span>
        <span className={styles.step_text}>Проверка</span>
      </div>
    </div>
  );
};
