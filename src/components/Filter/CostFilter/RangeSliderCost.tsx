import { useState, useRef, useEffect, useCallback } from "react";
import "./RangeSliderCost.css";
import { useDispatch } from "react-redux";
import {
  addOrChangeFilterAsideParameter
} from "../../../redux/slice/filteredAsideSlice.ts";

export const RangeSliderCost = ({ min, max, step }: { min: any, max: any, step: any }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [activeThumb, setActiveThumb] = useState(null);

  const range = useRef(null);

  const dispatch = useDispatch();

  const getPercent = useCallback(
    (value: any) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minValue);
    const maxPercent = getPercent(maxValue);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }

    // @ts-ignore
    dispatch(addOrChangeFilterAsideParameter("price_from", minValue));
    // @ts-ignore
    dispatch(addOrChangeFilterAsideParameter("price_to", maxValue));
  }, [minValue, maxValue, getPercent, dispatch]);

  return (
    <div className="slider-wrapper">
      <div className="title">Стоимость</div>
      <div className="labels">
        <span>от</span>
        <span>до</span>
      </div>

      <div className="slider-container">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          // @ts-ignore
          onMouseDown={() => setActiveThumb("min")}
          // @ts-ignore
          onTouchStart={() => setActiveThumb("min")}
          onChange={(e) => {
            const val = Math.min(Number(e.target.value), maxValue - step);
            setMinValue(val);
          }}
          className="thumb thumb--left"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          // @ts-ignore
          onMouseDown={() => setActiveThumb("max")}
          // @ts-ignore
          onTouchStart={() => setActiveThumb("max")}
          onChange={(e) => {
            const val = Math.max(Number(e.target.value), minValue + step);
            setMaxValue(val);
          }}
          className="thumb thumb--right"
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
        </div>
      </div>

      <div className="price-values">
        <span>{min}</span>
        <span>{activeThumb === "min" ? minValue : maxValue}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};
