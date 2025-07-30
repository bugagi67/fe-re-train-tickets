import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { ru } from "date-fns/locale/ru";
import calendar from "../../../../assets/searchIcons/calendar.svg"
import "react-datepicker/dist/react-datepicker.css";
import styles from "./CustomDatePicker.module.css";

registerLocale("ru", ru);

interface CustomDatePickerProps {
  startDate: Date,
  endDate: Date,
  onChangeStart: () => void,
  onChangeEnd: () => void,
}

export const CustomDatePicker = ({
  startDate,
  endDate,
  onChangeStart,
  onChangeEnd,
}: CustomDatePickerProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "3rem" }}>
      <div className={styles.datepicker_wrapper}>
        <DatePicker
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={onChangeStart}
          placeholderText="ДД/ММ/ГГ"
          className={styles.custom_input}
          calendarClassName={styles.custom_calendar}
          dateFormat="dd.MM.yyyy"
          locale="ru"
          minDate={new Date()}
        />
        <img src={calendar} className={styles.calendar_icon} />
      </div>
      <div className={styles.datepicker_wrapper}>
        <DatePicker
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || new Date()}
          onChange={onChangeEnd}
          placeholderText="ДД/ММ/ГГ"
          className={styles.custom_input}
          calendarClassName={styles.custom_calendar}
          dateFormat="dd.MM.yyyy"
          locale="ru"
        />
        <img src={calendar} className={styles.calendar_icon} />
      </div>
    </div>
  );
};
