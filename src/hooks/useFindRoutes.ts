import {useDispatch, useSelector} from "react-redux";
import {fetchRoutes} from "../redux/thunks/asyncThunks.ts";
import {useMemo} from "react";

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

export const useFindRoutes = () => { // убрали параметр skip
  const dispatch = useDispatch();
  const params = useSelector((state: RootState) => state.searchParams);
  const {loading, error, routesList, totalPages, currentPage, totalCount, ...otherParams} = params;

  const queryParams = useMemo(() => {
    const filterParams = (params: Record<string, unknown>) =>
      Object.fromEntries(
        Object.entries(params).filter(([_, v]) => v !== null && v !== undefined && v !== "")
      );

    const clearParams = filterParams(otherParams);
    return new URLSearchParams(clearParams as Record<string, string>).toString();
  }, [otherParams]);

  return {
    data: routesList,
    loading,
    error,
    totalPages,
    currentPage,
    totalCount,
    fetchRoutes: () => dispatch(fetchRoutes(queryParams))
  };
};