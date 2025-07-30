import {useEffect, useRef, useState} from "react";
import {format} from "date-fns";

import {CitySuggestList} from "./CitySuggestList/CitySuggestList";
import {CustomDatePicker} from "./CustomDatePicker/CustomDatePicker"
import {Button} from "../../../ui/Button/Button";
import type {ListObject} from "./CitySuggestList/CitySuggestList";

import {addOrChangeFormParameter, swapCity} from "../../../redux/slice/searchFormSlice";
import {addOrChangeSearchParameter, swapCityId} from "../../../redux/slice/searchParamsSlice";
import {getCitiesApi} from "./getCityApi/getCityApi";

import geoPoint from "../../../assets/searchIcons/geoPoint.svg";
import swapPlaces from "../../../assets/searchIcons/swapPlaces.svg"
import styles from "./SearchForm.module.css"
import {useDispatch} from "react-redux";

interface SearchFormProps {
  type: string;
}

export const SearchForm = ({type}: SearchFormProps) => {
  const [inputValueFrom, setInputValueFrom] = useState("");
  const [inputValueTo, setInputValueTo] = useState("");

  const [startDateState, setStartDate] = useState<Date | null>(null);
  const [endDateState, setEndDate] = useState<Date | null>(null);

  const [debouncedValueFrom, setDebouncedValueFrom] = useState("")
  const [debouncedValueTo, setDebouncedValueTo] = useState("")

  const [showSuggestionsFrom, setShowSuggestionsFrom] = useState<ListObject[]>([]);
  const [showSuggestionsTo, setShowSuggestionsTo] = useState<ListObject[]>([]);

  const [isCitySelectedFrom, setIsCitySelectedFrom] = useState(false);
  const [isCitySelectedTo, setIsCitySelectedTo] = useState(false);


  const fromInputRef = useRef<HTMLInputElement>(null);
  const toInputRef = useRef<HTMLInputElement>(null);
  const suggestionsFromRef = useRef<HTMLDivElement>(null);
  const suggestionsToRef = useRef<HTMLDivElement>(null)


  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Для поля "Откуда"
      if (
        fromInputRef.current &&
        !fromInputRef.current.contains(event.target as Node)
        && suggestionsFromRef.current
        && !suggestionsFromRef.current.contains(event.target as Node)
      ) {
        setShowSuggestionsFrom([]);
      }
      // Для поля "Куда"
      if (toInputRef.current
        && !toInputRef.current.contains(event.target as Node)
        && suggestionsToRef.current
        && !suggestionsToRef.current.contains(event.target as Node)) {
        setShowSuggestionsTo([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  // SuitableCity From
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValueFrom(inputValueFrom)
    }, 500)
    return () => clearTimeout(handler)
  }, [inputValueFrom])

// Для поля "Откуда"
  useEffect(() => {
    const getCities = async () => {
      if (debouncedValueFrom === "") {
        setShowSuggestionsFrom([]);
        return;
      }

      try {
        // Передаем skip: true когда город выбран из списка
        const cities = await getCitiesApi(debouncedValueFrom, isCitySelectedFrom);
        setShowSuggestionsFrom(cities);
      } catch (error) {
        console.error("Ошибка при загрузке городов:", error);
        setShowSuggestionsFrom([]);
      }
    };

    void getCities();
  }, [debouncedValueFrom, isCitySelectedFrom]);


  // SuitableCity To
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValueTo(inputValueTo)
    }, 500)
    return () => clearTimeout(handler)
  }, [inputValueTo])

// Для поля "Куда"
  useEffect(() => {
    const getCities = async () => {
      if (debouncedValueTo === "") {
        setShowSuggestionsTo([]);
        return;
      }

      try {
        // Передаем skip: true когда город выбран из списка
        const cities = await getCitiesApi(debouncedValueTo, isCitySelectedTo);
        setShowSuggestionsTo(cities);
      } catch (error) {
        console.error("Ошибка при загрузке городов:", error);
        setShowSuggestionsTo([]);
      }
    };

    void getCities();
  }, [debouncedValueTo, isCitySelectedTo]);


  // Свап городов по клику
  const handleSwapCities = () => {
    dispatch(swapCity())
    dispatch(swapCityId())
    setShowSuggestionsFrom([]);
    setShowSuggestionsTo([]);
    const temp: string = inputValueFrom;
    setInputValueFrom(inputValueTo);
    setInputValueTo(temp);
  };

  return (

    <div className={type === "main" ? styles.search_form : styles.search_form_default}>
      <form>
        <div className={styles.wrapper_form}>
          <h3>Направление</h3>
          <div className={styles.input_flex}>
            <div className={styles.wrapper_input}>
              <input
                ref={fromInputRef}
                type="text"
                value={inputValueFrom}
                onChange={(e) => {
                  setInputValueFrom(e.target.value);
                  setIsCitySelectedFrom(false);
                }}
                name="from_city_id"
                placeholder="Откуда"
                autoComplete="off"
              />
              {showSuggestionsFrom.length > 0 && inputValueFrom.length > 0 && (
                <div ref={suggestionsFromRef}>
                  <CitySuggestList
                    list={showSuggestionsFrom}
                    type={"whereFrom"}
                    onSelectCity={(city) => {
                      setInputValueFrom(city);
                      setShowSuggestionsFrom([]);
                      setIsCitySelectedFrom(true);
                    }}

                  />
                </div>
              )}
              <img src={geoPoint} alt=""/>
            </div>
            <img
              className={styles.swap_places}
              src={swapPlaces}
              alt=""
              onClick={handleSwapCities}
            />
            <div className={styles.wrapper_input}>
              <input
                ref={toInputRef}
                type="text"
                name="to_city_id"
                placeholder="Куда"
                value={inputValueTo}
                onChange={(e) => {
                  setInputValueTo(e.target.value);
                  setIsCitySelectedTo(false);
                }}
                autoComplete="off"
              />
              {showSuggestionsTo.length > 0 && inputValueTo.length > 0 && (
                <div ref={suggestionsToRef}>
                  <CitySuggestList
                    list={showSuggestionsTo}
                    type="whereTo"
                    onSelectCity={(city) => {
                      setInputValueTo(city);
                      setShowSuggestionsTo([]);
                      setIsCitySelectedTo(true);
                    }}
                  />
                </div>
              )}
              <img src={geoPoint} alt=""/>
            </div>
          </div>
        </div>
        <div className={styles.wrapper_form}>
          <div>
            <h3>Дата</h3>
            <CustomDatePicker
              startDate={startDateState}
              endDate={endDateState}
              onChangeStart={(data: Date | null) => {
                setStartDate(data);
                if (data) {
                  const formatDate = format(data, "yyyy-MM-dd");
                  dispatch(addOrChangeFormParameter({name: "dateStartFrom", value: formatDate}));
                  dispatch(addOrChangeSearchParameter({name: "date_start", value: formatDate}));
                } else {
                  dispatch(addOrChangeFormParameter({name: "dateStartFrom", value: ""}));
                  dispatch(addOrChangeSearchParameter({name: "date_start", value: ""}));
                }
              }}
              onChangeEnd={(data: Date | null) => {
                setEndDate(data);
                if (data) {
                  const formatDate = format(data, "yyyy-MM-dd");
                  dispatch(addOrChangeFormParameter({name: "dateArrivalTo", value: formatDate}));
                  dispatch(addOrChangeSearchParameter({name: "date_end", value: formatDate}));
                } else {
                  dispatch(addOrChangeFormParameter({name: "dateArrivalTo", value: ""}));
                  dispatch(addOrChangeSearchParameter({name: "date_end", value: ""}));
                }
              }}
            />
            <div className={styles.wrapper_button}>
              <Button title="НАЙТИ БИЛЕТЫ" type="submit"/>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};