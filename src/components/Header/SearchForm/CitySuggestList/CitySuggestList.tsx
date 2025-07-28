import "./CitySuggestList.module.css";
import { useDispatch } from "react-redux";
import { addOrChangeSearchParameter } from "../../../../redux/slice/searchParamsSlice";

export const CitySuggestList = ({ list, onSelectCity, type }) => {
  const dispatch = useDispatch();

  const hadleClick = (city, id) => {
    onSelectCity(city);
    if (type === "whereFrom") {
      dispatch(addOrChangeSearchParameter("from_city_id", id));
    } else {
      dispatch(addOrChangeSearchParameter(id))
    }
  };

  return (
    <ul className="drop-down">
      {list.map((city) => (
        <li
          onClick={() => hadleClick(city.name, city._id)}
          className="drop-down-item"
          key={city._id}
        >
          {city.name}
        </li>
      ))}
    </ul>
  );
};
