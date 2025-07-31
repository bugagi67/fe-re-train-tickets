import {RangeSliderCost} from "./CostFilter/RangeSliderCost";
import {DateFilter} from "./DateFilter/DateFilter";
import styles from "./Filter.module.css";
import {FromFilterTime} from "./TimeFilter/FromAndToFilter/FromFilterTime";
import {SlidersFilter} from "./SlidersFilter/SlidersFilter";
import {useShowApplyButton} from "./hooks/useShowApplyButton";
import {ApplyButton} from "./ApplyButton/ApplyButton";
import {useDispatch, useSelector} from "react-redux";
import {updateSearchParamsIsChanged} from "../../redux/slice/searchParamsSlice";

export const Filter = () => {
  const isShowButton = useShowApplyButton();
  // @ts-ignore
  const filters = useSelector(state => state.filterAsideSlice);
  const dispatch = useDispatch();

  const handleApplyButtonClick = () => {
    dispatch(updateSearchParamsIsChanged(filters))
  };

  return (
    <aside className={styles.filter_component}>
      <DateFilter/>
      <SlidersFilter/>
      <RangeSliderCost min={0} max={7000} step={10}/>
      <FromFilterTime title={"Туда"}/>
      <FromFilterTime title={"Обратно"}/>
      {isShowButton && <ApplyButton handleClick={handleApplyButtonClick}/>}
    </aside>
  );
};
