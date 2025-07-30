import DatePicker from "react-datepicker";
import {registerLocale} from "react-datepicker";
import {ru} from "date-fns/locale/ru";
import calendar from "../../../../assets/searchIcons/calendar.svg"
import "react-datepicker/dist/react-datepicker.css";
import "./CustomDatePicker.css";

registerLocale("ru", ru);

interface CustomDatePickerProps {
  startDate: Date | null,
  endDate: Date | null,
  onChangeStart: (date: Date | null) => void,
  onChangeEnd: (date: Date | null) => void,
}

export const CustomDatePicker = ({
                                   startDate,
                                   endDate,
                                   onChangeStart,
                                   onChangeEnd,
                                 }: CustomDatePickerProps) => {
  return (
    <div style={{display: "flex", justifyContent: "space-between", gap: "3rem"}}>
      <div className="datepicker_wrapper">
        <DatePicker
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={onChangeStart}
          placeholderText="ДД/ММ/ГГ"
          calendarClassName="custom_calendar"
          wrapperClassName="datepicker_wrapper"
          className="custom_input"
          dateFormat="dd.MM.yyyy"
          locale="ru"
          minDate={new Date()}
        />
        <img src={calendar} className="calendar_icon" alt={"иконка календаря"}/>
      </div>
      <div className="datepicker_wrapper">
        <DatePicker
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || new Date()}
          onChange={onChangeEnd}
          placeholderText="ДД/ММ/ГГ"
          calendarClassName="custom_calendar"
          wrapperClassName="datepicker_wrapper"
          className="custom_input"
          dateFormat="dd.MM.yyyy"
          locale="ru"
        />
        <img src={calendar} className="calendar_icon" alt={"иконка календаря"}/>
      </div>
    </div>
  );
};
