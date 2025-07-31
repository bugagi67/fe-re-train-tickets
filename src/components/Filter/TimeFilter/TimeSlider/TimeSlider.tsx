import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import "./TimeSlider.css";
import {addOrChangeFilterAsideParameter} from "../../../../redux/slice/filteredAsideSlice.ts";

export const TimeSlider = ({type, title}: {type: string, title: string}) => {
  const MIN = 0;
  const MAX = 1440;
  const STEP = 1;

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1440);
  const [activeThumb, setActiveThumb] = useState(null);

  const range = useRef(null);

  const dispatch = useDispatch();

  const getPercent = (val: number) => ((val - MIN) / (MAX - MIN)) * 100;

  const formatTime = (minutes: number) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs}:${mins.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const minPercent = getPercent(minValue);
    const maxPercent = getPercent(maxValue);
    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minValue, maxValue]);

  return (
    <div className="time-slider-wrapper">
      <div className="time-title">{title}</div>
      <div className="time-slider-container">
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={minValue}
          // @ts-ignore
          onMouseDown={() => setActiveThumb("min")}
          // @ts-ignore
          onTouchStart={() => setActiveThumb("min")}
          onChange={(e) => {
            const val = Math.min(Number(e.target.value), maxValue - STEP);
            setMinValue(val);

            if (title === "Время отбытия") {
              if (type === "there") {
                // @ts-ignore
                dispatch(addOrChangeFilterAsideParameter("start_departure_hour_from", (Math.floor(val / 60))))
              } else if (type === "back") {
                // @ts-ignore
                dispatch(addOrChangeFilterAsideParameter("end_departure_hour_from", (Math.floor(val / 60))))
              }
            } else if (title === "Время прибытия") {
              if (type === "there") {
                // @ts-ignore
                dispatch(addOrChangeFilterAsideParameter("start_arrival_hour_from", (Math.floor(val / 60))));
              } else if (type === "back") {
                // @ts-ignore
                dispatch(addOrChangeFilterAsideParameter("end_arrival_hour_from", (Math.floor(val / 60))));
              }
            }
          }}
          className="time-thumb time-thumb-left"
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={maxValue}
          // @ts-ignore
          onMouseDown={() => setActiveThumb("max")}
          // @ts-ignore
          onTouchStart={() => setActiveThumb("max")}
          onChange={(e) => {
            const val = Math.max(Number(e.target.value), minValue + STEP);
            setMaxValue(val);

            if (title === "Время отбытия") {
              if (type === "there") {
                // @ts-ignore
                dispatch(addOrChangeFilterAsideParameter("start_departure_hour_to", (Math.ceil(val / 60))));
              } else if (type === "back") {
                // @ts-ignore
                dispatch(addOrChangeFilterAsideParameter("end_departure_hour_to", (Math.ceil(val / 60))));
              }
            } else if (title === "Время прибытия") {
              if (type === "there") {
                // @ts-ignore
                dispatch(addOrChangeFilterAsideParameter("start_arrival_hour_to", (Math.ceil(val / 60))));
              } else if (type === "back") {
                // @ts-ignore
                dispatch(addOrChangeFilterAsideParameter("end_arrival_hour_to", (Math.ceil(val / 60))));
              }
            }
          }}
          className="time-thumb time-thumb-right"
        />

        <div className="time-slider">
          <div className="slider-track-time"/>
          <div ref={range} className="time-slider-range"/>
        </div>
      </div>

      <div className="time-values">
        <span>{formatTime(MIN)}</span>
        <span>
          {activeThumb === "min"
            ? formatTime(minValue)
            : activeThumb === "max"
              ? formatTime(maxValue)
              : ""}
        </span>
        <span>{formatTime(MAX)}</span>
      </div>
    </div>
  );
};
