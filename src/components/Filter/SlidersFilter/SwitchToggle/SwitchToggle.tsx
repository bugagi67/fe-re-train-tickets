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
      dispatch(addOrChangeFilterAsideParameter({name: "have_second_class", value: isToggle}));
    } else if (type === "Плацкарт") {
      // @ts-ignore
      dispatch(addOrChangeFilterAsideParameter({name: "have_third_class", value: isToggle}));
    } else if (type === "Сидячий") {
      // @ts-ignore
      dispatch(addOrChangeFilterAsideParameter({name: "have_fourth_class", value: isToggle}));
    } else if (type === "Люкс") {
      dispatch(
        // @ts-ignore
        addOrChangeFilterAsideParameter({name: "have_first_class", value: isToggle}));
    } else if (type === "Wi-Fi") {
      // @ts-ignore
      dispatch(addOrChangeFilterAsideParameter({name: "have_wifi", value: isToggle}));
    } else if (type === "Экспресс") {
      // @ts-ignore
      dispatch(addOrChangeFilterAsideParameter({name: "have_express", value: isToggle}));
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
