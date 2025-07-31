import {useSelector} from "react-redux";

export const useShowApplyButton = () => {
  // @ts-ignore
  const filters = useSelector((state) => state.filterAsideSlice);
  // @ts-ignore
  const params = useSelector((state) => state.searchParams);

  return Object.keys(filters).some(
    (key) => Object.prototype.hasOwnProperty.call(params, key) && String(filters[key]) !== String(params[key])
  );
};
