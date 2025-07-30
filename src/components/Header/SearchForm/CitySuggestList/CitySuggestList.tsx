import styles from "./CitySuggestList.module.css";
import {useDispatch} from "react-redux";
import {addOrChangeFormParameter} from "../../../../redux/slice/searchFormSlice";
import {addOrChangeSearchParameter} from "../../../../redux/slice/searchParamsSlice";

export interface ListObject {
  name: string,
  _id: string,
}

interface CitySuggestListProps {
  list: ListObject[],
  onSelectCity: (cityName: string) => void,
  type: string,
}

export const CitySuggestList = ({list, onSelectCity, type}: CitySuggestListProps) => {
  const dispatch = useDispatch();

  const handleClick = (city: ListObject) => {
    onSelectCity(city.name);
    if (type === "whereFrom") {
      dispatch(addOrChangeFormParameter({name: "whereFromCity", value: city.name}));
      dispatch(addOrChangeSearchParameter({name: "from_city_id", value: city._id}))
    } else {
      dispatch(addOrChangeFormParameter({name: "whereToCity", value: city.name}));
      dispatch(addOrChangeSearchParameter({name: "to_city_id", value: city._id}))
    }
  };

  return (
    <ul className={styles.drop_down}>
      {list.map((city) => (
        <li
          onClick={() => handleClick(city)}
          className={styles.drop_down_item}
          key={city._id}
        >
          {city.name}
        </li>
      ))}
    </ul>
  );
};
