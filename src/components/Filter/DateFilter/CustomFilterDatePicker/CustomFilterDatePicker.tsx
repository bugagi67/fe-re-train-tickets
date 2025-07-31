import DatePicker, {registerLocale} from "react-datepicker";
import {ru} from "date-fns/locale/ru";
import calendar from "../../../../assets/searchIcons/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomFilterDatePicker.css";

registerLocale("ru", ru);

export const CustomFilterDatePicker = ({
                                         fromDate,
                                         arrivalDate,
                                         onChangeStart,
                                         onChangeArrival,
                                       }: {
  fromDate: any,
  arrivalDate: any,
  onChangeStart: any,
  onChangeArrival: any,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "3rem",
      }}
    >
      <div className="date-picker-block">
        <h3>Дата поездки</h3>
        <div className="datepicker-wrapper-filter">
          <DatePicker
            selected={fromDate}
            selectsStart
            startDate={fromDate}
            endDate={arrivalDate}
            onChange={onChangeStart}
            placeholderText="ДД/ММ/ГГ"
            className="custom-input-filter"
            calendarClassName="custom-calendar-filter"
            dateFormat="dd.MM.yyyy"
            locale="ru"
            minDate={new Date()}
          />
          <img src={calendar} className="calendar-icon-filter"/>
        </div>
      </div>
      <div className="date-picker-block">
        <h3>Дата возвращения</h3>
        <div className="datepicker-wrapper-filter">
          <DatePicker
            selected={arrivalDate}
            selectsEnd
            startDate={fromDate}
            endDate={arrivalDate}
            minDate={fromDate || new Date()}
            onChange={onChangeArrival}
            placeholderText="ДД/ММ/ГГ"
            className="custom-input-filter"
            calendarClassName="custom-calendar-filter"
            dateFormat="dd.MM.yyyy"
            locale="ru"
          />
          <img src={calendar} className="calendar-icon-filter"/>
        </div>
      </div>
    </div>
  );
};
