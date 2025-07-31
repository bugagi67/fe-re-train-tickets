import styles from "./SlidersFilter.module.css";
import {SliderFilter} from "./SliderFilter.js";
import {express, first, fourth, second, third, wifi,} from "./svgFilteredIcons.tsx";

export const SlidersFilter = () => {
  return (
    <div className={styles.sliders_filter_list}>
      <SliderFilter type={"Купе"} icon={second()} key={1}/>
      <SliderFilter type={"Плацкарт"} icon={third()} key={2}/>
      <SliderFilter type={"Сидячий"} icon={fourth()} key={3}/>
      <SliderFilter type={"Люкс"} icon={first()} key={4}/>
      <SliderFilter type={"Wi-Fi"} icon={wifi()} key={5}/>
      <SliderFilter type={"Экспресс"} icon={express()} key={6}/>
    </div>
  );
};
 