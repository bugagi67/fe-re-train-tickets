import {useState} from "react";
import {useDispatch} from "react-redux";
import {IconConveniences} from "../../../../IconConveniences/IconConveniences";
import {LineOfPlaces} from "../LineOfPlaces/LineOfPlaces";
import {Button} from "../../../../../ui/Button/Button";
import {useFindSeats} from "../../../../../hooks/useFindSeats.ts";
import style from "./ListOfPlaces.module.css";

export const ListOfPlaces = ({item}: { item: any }) => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const dispatch = useDispatch();

  const {response} = useFindSeats(
    item.departure._id,
    !shouldFetch // Инвертированная логика: если shouldFetch true, то skip false
  );

  // Убираем этот эффект, так как он создает лишний цикл обновлений
  // useEffect(() => {
  //   if (response) {
  //     dispatch(setData(response));
  //   }
  // }, [response, dispatch]);

  return (
    <div className={style.list_of_places}>
      <LineOfPlaces item={item}/>
      <div>
        <IconConveniences item={item}/>
        <Button
          title={"Выбрать места"}
          variant={"card"}
          onClick={() => setShouldFetch(true)}
        />
      </div>
    </div>
  );
};