import styles from "./Hint.module.css"

export const Hint = ({ type }: { type: any }) => {
  return (
    <div className={styles.hint}>
      {type === "wifi" && (
        <div className="hint-type">
          WI-FI
        </div>
      )}
      {type === "express" && (
        <div className="hint-type">
          экспрес
        </div>
      )}
      {type === "conditioner" && (
        <div className="hint-type">
          кондиционер
        </div>
      )}
    </div>
  );
};
