import {useDispatch} from "react-redux";
import {setCurrentPage, addOrChangeSearchParameter} from "../../../../redux/slice/searchParamsSlice";
import {useEffect, useState} from "react";
import styles from "./Sorting.module.css";
import {useFindRoutes} from "../../../../hooks/useFindRoutes.ts";

export const Sorting = () => {
  const {fetchRoutes} = useFindRoutes()
  const [sortSelect, setSortSelect] = useState("времени");
  const [showDropDown, setShowDropDown] = useState(false);
  const dispatch = useDispatch();

  const handleClickSortValue = (e: any) => {
    const target = e.target.textContent;

    if (target === "времени") {
      setSortSelect(target);
      // @ts-ignore
      dispatch(addOrChangeSearchParameter({name: "sort", value: "date"}));
    }

    if (target === "стоимость") {
      setSortSelect(target);
      // @ts-ignore
      dispatch(addOrChangeSearchParameter({name: "sort", value: "min_price"}));
    }

    if (target === "длительность") {
      setSortSelect(target);
      // @ts-ignore
      dispatch(addOrChangeSearchParameter({name: "sort", value: "duration"}));
    }

    dispatch(setCurrentPage(1));
  };

  const handleClickSelectSort = () => {
    setShowDropDown(true);
  };


  useEffect(() => {
    fetchRoutes()
    setShowDropDown(false);
  }, [sortSelect]);

  return (
    <div className={styles.sorted} onClick={handleClickSelectSort}>
      <span>сортировать по:</span>{" "}
      <span className={styles.selected_value}>{sortSelect}</span>
      {showDropDown && (
        <div className={styles.drop_down_sort}>
          <div
            className={styles.drop_down_sort_item}
            onClick={(e) => handleClickSortValue(e)}
          >
            времени
          </div>
          <div
            className={styles.drop_down_sort_item}
            onClick={(e) => handleClickSortValue(e)}
          >
            стоимость
          </div>
          <div
            className={styles.drop_down_sort_item}
            onClick={(e) => handleClickSortValue(e)}
          >
            длительность
          </div>
        </div>
      )}
    </div>
  );
};
