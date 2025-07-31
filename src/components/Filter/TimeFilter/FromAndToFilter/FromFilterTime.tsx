import { useState } from "react";
import "./FromFilterTime.css";
import { TimeSliderFilter } from "./TimesSliderFilter/TimeSliderFilter";

export const FromFilterTime = ({ title }: {title: string}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="from-filter-time-container">
        <div className="flex-time-container">
          {
            <svg
              width="32"
              height="26"
              style={title === "Обратно" ? { transform: "rotate(180deg)" } : undefined}
              viewBox="0 0 32 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 0C2.23877 0 0 2.23859 0 5V21C0 23.7615 2.23877 26 5 26H27C29.7612 26 32 23.7615 32 21V5C32 2.23859 29.7612 0 27 0H5ZM17.8369 14.2238V17.3334C19.3442 15.8793 20.8667 14.4109 22.3154 13.0288L20.5205 11.2816C19.6304 10.416 18.729 9.54138 17.8223 8.66669V11.9491H9.68408V14.2238H17.8369Z"
                fill="#FFA800"
              />
            </svg>
          }
          <div className="title">{title}</div>
        </div>
        {show ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setShow(false)}
          >
            <rect
              x="1"
              y="1"
              width="18"
              height="18"
              rx="4"
              stroke="#C4C4C4"
              strokeWidth="2"
            />
            <line
              x1="5.61523"
              y1="9.76929"
              x2="14.3845"
              y2="9.76929"
              stroke="#C4C4C4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setShow(true)}
          >
            <path
              d="M9.22204 4.20293L9.22204 9.18841L4.23656 9.18841C3.7728 9.18841 3.42497 9.53623 3.42497 10C3.42497 10.4638 3.7728 10.8116 4.23656 10.8116L9.22204 10.8116L9.22204 15.7971C9.22204 16.2608 9.56987 16.6087 9.97566 16.5507L10.0916 16.5507C10.5554 16.5507 10.9032 16.2029 10.8452 15.7971V10.8116H15.7148C16.1785 10.8116 16.5264 10.4638 16.5264 10C16.5264 9.53623 16.1785 9.18841 15.7148 9.18841H10.8452V4.20293C10.8452 3.73917 10.4974 3.39134 10.0916 3.44931L9.97566 3.44931C9.5119 3.44931 9.16407 3.79714 9.22204 4.20293Z"
              fill="white"
            />
            <rect
              x="1"
              y="1"
              width="18"
              height="18"
              rx="4"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        )}
      </div>
      {show ? (
        title === "Туда" ? (
          <TimeSliderFilter type={"there"} />
        ) : (
          <TimeSliderFilter type={"back"} />
        )
      ) : null}
    </>
  );
};
