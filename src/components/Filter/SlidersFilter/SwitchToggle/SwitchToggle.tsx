import styles from "./SwitchToggle.module.css";
import {useEffect, useState} from "react";
import {addOrChangeFilterAsideParameter} from "../../../../redux/slice/filteredAsideSlice.ts";
import {useDispatch} from "react-redux";

export const SwitchToggle = ({type}: { type: string }) => {
  const [isToggle, setIsToggle] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "Купе") {
      // @ts-ignore
      dispatch(addOrChangeFilterAsideParameter("have_second_class", isToggle));
    } else if (type === "Плацкарт") {
      // @ts-ignore
      dispatch(addOrChangeFilterAsideParameter("have_third_class", isToggle));
    } else if (type === "Сидячий") {
      // @ts-ignore
      dispatch(addOrChangeFilterAsideParameter("have_fourth_class", isToggle));
    } else if (type === "Люкс") {
      dispatch(
        // @ts-ignore
        addOrChangeFilterAsideParameter("have_first_class", isToggle));
    } else if (type === "Wi-Fi") {
      // @ts-ignore
      dispatch(addOrChangeFilterAsideParameter("have_wifi", isToggle));
    } else if (type === "Экспресс") {
      // @ts-ignore
      dispatch(addOrChangeFilterAsideParameter("have_express", isToggle));
    }
  }, [isToggle, dispatch, type]);

  return (
    <label className={styles.switch_toggle}>
      <input
        type="checkbox"
        className={styles.switch_input}
        // @ts-ignore
        onChange={() => setIsToggle(!isToggle ? true : null)}
      />
      <span className={styles.switch_toggle_slider}></span>
    </label>
  );
};
