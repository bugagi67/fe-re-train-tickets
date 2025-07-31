import styles from "./SliderFilter.module.css";
import { SwitchToggle } from "./SwitchToggle/SwitchToggle.js";

export const SliderFilter = ({ type, icon }: {type: string, icon: any}) => {
  return (
    <div className={styles.slider_filter_item}>
      {icon}
      <div className={styles.type_filter}>{type}</div>
      <div className={styles.slider_filter}>
        <SwitchToggle type={type}/>
      </div>
    </div>
  );
};
