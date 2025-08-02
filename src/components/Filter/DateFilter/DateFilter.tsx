import {CustomFilterDatePicker} from "./CustomFilterDatePicker/CustomFilterDatePicker";
import styles from "./DateFilter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {addOrChangeFilterAsideParameter} from "../../../redux/slice/filteredAsideSlice";
import {format} from "date-fns"
import type {RootState} from '../../../redux/store/store';


export const DateFilter = () => {
  const dispatch = useDispatch();
  const filterAsideData = useSelector((state: RootState) => state.filterAside);

  const handleDateChange = (field: string, date: Date) => {
    dispatch(addOrChangeFilterAsideParameter({
      name: field,
      value: format(date, "yyyy-MM-dd")
    }));
  };


  // @ts-ignore
  return (
    <div className={styles.date_filter}>
      <CustomFilterDatePicker
        fromDate={filterAsideData.date_start || ""}
        arrivalDate={filterAsideData.date_start_arrival || ""}
        // @ts-ignore
        onChangeStart={(data: Date) => handleDateChange("date_start", data)}
        // @ts-ignore
        onChangeArrival={(data: Date) => handleDateChange("date_start_arrival", data)}
      />
    </div>
  );
};
