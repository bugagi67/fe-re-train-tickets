import {useSelector} from "react-redux";

interface FilterAsideState {
  date_start: string | null;
  date_start_arrival: string | null;
  have_second_class: boolean | null;
  have_third_class: boolean | null;
  have_fourth_class: boolean | null;
  have_first_class: boolean | null;
  have_wifi: boolean | null;
  have_express: boolean | null;
  price_from: number;
  price_to: number;
}

interface SearchParamsState {
  [key: string ]: any;
}

interface RootState {
  filterAside: FilterAsideState;
  searchParams: SearchParamsState;
}

export const useShowApplyButton = () => {
  const filters = useSelector((state: RootState) => state.filterAside);
  const params = useSelector((state: RootState) => state.searchParams);

  if (!filters || !params) {
    return false;
  }

  return Object.keys(filters).some(
    (key) => Object.prototype.hasOwnProperty.call(params, key) &&
      String(filters[key]) !== String(params[key])
  );
};