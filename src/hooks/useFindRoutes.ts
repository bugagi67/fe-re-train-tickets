import {useDispatch, useSelector} from "react-redux";
import {fetchRoutes} from "../redux/thunks/asyncThunks.ts";
import {useEffect} from "react";

interface SearchParamsState {
  loading: boolean;
  error: string | null;
  routesList: [];
  totalPages: number;
  currentPage: number;
  totalCount: number;
  from_city_id: string;
  to_city_id: string;
  date_start: string;
  date_end: string;
}

interface RootState {
  searchParams: SearchParamsState;
}

export const useFindRoutes = (skip: boolean) => {
  const dispatch = useDispatch();
  const params = useSelector((state: RootState) => state.searchParams);


  const {loading, error, routesList, totalPages, currentPage, totalCount, ...otherParams} = params;
  const filterParams = (filteredParams: { [s: string]: unknown; } | ArrayLike<unknown>) =>
    Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(filteredParams).filter(([_, v]) => v !== null && v !== undefined && v !== "")
    );

  const clearParams = filterParams(otherParams);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // @ts-ignore
  const queryParams = new URLSearchParams(clearParams);
  console.log(queryParams);

  useEffect(() => {
    if (skip) {
      // @ts-ignore
      dispatch(fetchRoutes(queryParams));
    }
  }, [skip, queryParams, dispatch]);

  return {data: routesList, loading, error, totalPages, currentPage, totalCount}
}