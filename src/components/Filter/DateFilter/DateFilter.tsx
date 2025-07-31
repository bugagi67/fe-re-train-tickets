import {CustomFilterDatePicker} from "./CustomFilterDatePicker/CustomFilterDatePicker";
import styles from "./DateFilter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {addOrChangeFilterAsideParameter} from "../../../redux/slice/filteredAsideSlice";
import {format} from "date-fns"

export const DateFilter = () => {
  const dispatch = useDispatch();
  const {date_start: dateDeparture, date_start_arrival: dateArrival} = useSelector(
    // @ts-ignore
    (state) => state.filterAsideSlice
  );

  const {date_start, date_start_arrival} = useSelector(
    // @ts-ignore
    (state) => state.searchParams
  );

  // @ts-ignore
  return (
    <div className={styles.date_filter}>
      <CustomFilterDatePicker
        fromDate={dateDeparture ? dateDeparture : date_start || ""}
        arrivalDate={dateArrival ? dateArrival : date_start_arrival || ""}
        // @ts-ignore
        onChangeStart={(data: any) => dispatch(addOrChangeFilterAsideParameter("date_start", format(data, "yyyy-MM-dd")))}
        // @ts-ignore
        onChangeArrival={(data: any) => dispatch(addOrChangeFilterAsideParameter("date_start_arrival", format(data, "yyyy-MM-dd")))}
      />
    </div>
  );
};
