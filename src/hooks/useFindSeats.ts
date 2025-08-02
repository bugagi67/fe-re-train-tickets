import {useEffect} from 'react';
import {filterParams} from "../utils/filterParams";
import {useDispatch, useSelector} from "react-redux";
import {fetchSelectTrain} from "../redux/thunks/asyncThunks.ts";

const excludeKeys = [
  "date_start",
  "date_start_arrival",
  "price_from",
  "price_to",
  "start_departure_hour_from",
  "start_departure_hour_to",
  "start_arrival_hour_from",
  "start_arrival_hour_to",
  "end_departure_hour_from",
  "end_departure_hour_to",
  "end_arrival_hour_from",
  "end_arrival_hour_to",
];

const filterParamsKeys = (params: any) =>
  Object.fromEntries(
    Object.entries(params).filter(([key]) => !excludeKeys.includes(key))
  );

export const useFindSeats = (id: string, skip: boolean) => {
  const params = useSelector((state) => state.filterAsideSlice);
  const selectedTrain = useSelector((state: any) => state.selectedTrain?.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (skip) return;

    const {...rawParams} = params;
    const queryParams = filterParamsKeys(filterParams(rawParams));

    dispatch(fetchSelectTrain({
      id,
      queryString: new URLSearchParams(queryParams).toString()
    }));
  }, [id, skip, dispatch]);

  return {
    response: selectedTrain
  };
};