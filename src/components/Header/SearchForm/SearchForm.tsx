import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";

import { CitySuggestList } from "./CitySuggestList/CitySuggestList";
import { CustomDatePicker } from "./CustomDatePicker/CustomDatePicker"
import { Button } from "../../../ui/Button/Button";

import { addOrChangeFormParameter, swapCity } from "../../../redux/slice/searchFormSlice";
import { addOrChangeSearchParameter, swapCityId } from "../../../redux/slice/searchParamsSlice";
import { getCitiesApi } from "./getCityApi/getCityApi";

import geoPoint from "../../../assets/searchIcons/geoPoint.svg";
import swapPlaces from "../../../assets/searchIcons/swapPlaces.svg"
import styles from "./SearchForm.module.css"
import { useDispatch } from "react-redux";

interface SearchFormProps {
  type: string;
}

export const SearchForm = ({ type }: SearchFormProps) => {
  const [inputValueFrom, setInputValueFrom] = useState("");
  const [inputValueTo, setInputValueTo] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [debouncedValueFrom, setDebouncedValueFrom] = useState("")
  const [debouncedValueTo, setDebouncedValueTo] = useState("")

  const [showSuggestionsFrom, setShowSuggestionsFrom] = useState([]);
  const [showSuggestionsTo, setShowSuggestionsTo] = useState([]);

  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);

  const dispatch = useDispatch();


  // SuitableCity From
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValueFrom(inputValueFrom)
    }, 500)
    return () => clearTimeout(handler)
  }, [inputValueFrom])

  useEffect(() => {
    const getCities = async () => {
      if (debouncedValueFrom === "") {
        setShowSuggestionsFrom([]);
        return;
      }
      try {
        const cities = await getCitiesApi(debouncedValueFrom);
        setShowSuggestionsFrom(cities);
      } catch (error) {
        console.error("Ошибка при загрузке городов:", error);
        setShowSuggestionsFrom([]);
      }
    };

    getCities();
  }, [debouncedValueFrom]);


  // SuitableCity To
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValueTo(inputValueTo)
    }, 500)
    return () => clearTimeout(handler)
  }, [inputValueTo])

  useEffect(() => {
    const getCities = async () => {
      if (debouncedValueTo === "") {
        setShowSuggestionsTo([]);
        return;
      }
      try {
        const cities = await getCitiesApi(debouncedValueTo);
        setShowSuggestionsTo(cities);
      } catch (error) {
        console.error("Ошибка при загрузке городов:", error);
        setShowSuggestionsTo([]);
      }
    };

    getCities();
  }, [debouncedValueTo]);



  // Свап городов по клику
  const handleSwapCities = () => {
    dispatch(swapCity())
    dispatch(swapCityId())
  };

  return (

    <div className={type === "main" ? styles.search_form : styles.search_form_default}>
      <form>
        <div className={styles.wrapper_form}>
          <h3>Направление</h3>
          <div className={styles.input_flex}>
            <div className={styles.wrapper_input}>
              <input
                type="text"
                value={inputValueFrom}
                onChange={(e) => {
                  setInputValueFrom(e.target.value);
                }}
                name="from_city_id"
                placeholder="Откуда"
                autoComplete="off"
              />
              {showSuggestionsFrom && (
                <div ref={fromInputRef}>
                  <CitySuggestList
                    list={showSuggestionsFrom}
                    type={"whereFrom"}
                    onSelectCity={(city) => {
                      setInputValueFrom(city)
                    }}
                    set={setShowSuggestionsFrom}
                  />
                </div>
              )}
              <img src={geoPoint} alt="" />
            </div>
            <img
              className={styles.swap_places}
              src={swapPlaces}
              alt=""
              onClick={handleSwapCities}
            />
            <div className={styles.wrapper_input}>
              <input
                type="text"
                name="to_city_id"
                placeholder="Куда"
                value={inputValueTo}
                onChange={(e) => {
                  setInputValueTo(e.target.value);
                }}
                autoComplete="off"
              />
              {showSuggestionsTo && (
                <div ref={toInputRef}>
                  <CitySuggestList
                    list={showSuggestionsTo}
                    type="whereTo"
                    onSelectCity={(city) => {
                      setInputValueTo(city)
                    }}
                    set={setShowSuggestionsTo}
                  />
                </div>
              )}
              <img src={geoPoint} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.wrapper_form}>
          <div>
            <h3>Дата</h3>
            <CustomDatePicker
              startDate={startDate}
              endDate={endDate}
              onChangeStart={(data: Date | null) => {
                if (!data) return;
                const formatDate = format(data, "yyyy-MM-dd")
                setStartDate(formatDate)
                dispatch(addOrChangeFormParameter({ name: "dateStartFrom", value: formatDate }));
                dispatch(addOrChangeSearchParameter({ name: "date_start", value: formatDate }));
              }}
              onChangeEnd={(data: Date | null) => {
                if (!data) return;
                const formatDate = format(data, "yyyy-MM-dd")
                setEndDate(formatDate)
                dispatch(addOrChangeFormParameter({ name: "dateArrivalTo", value: formatDate }));
                dispatch(addOrChangeSearchParameter({ name: "date_end", value: formatDate }));

              }}
            />
            <div className={styles.wrapper_button}>
              <Button title="НАЙТИ БИЛЕТЫ" type="submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
