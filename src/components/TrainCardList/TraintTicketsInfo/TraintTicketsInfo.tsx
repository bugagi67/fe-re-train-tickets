import styles from "./TrainTicketsInfo.module.css";
import  { useSelector} from "react-redux";
import {ListOfPlaces} from "./ListOfPlaces/ListOfPlaces/ListOfPlaces";
import {ListTrainRoutes} from "./MidleComponentSchedule/ListTrainRoute";
import {DirectionTrain} from "./DirectionTrain/DirectionTrain";

export const TrainTicketsInfo = () => {
  const { routesList } = useSelector((state: any) => state.searchParams);

  if (!routesList || !routesList.items) {
    return <div>Загрузка...</div>;
  }

  return (
    routesList.items.map((item: any) => (
      <div style={{height: `${item.arrival ? "354px" : "268px"}`}} key={item.departure.train._id}
           className={styles.train_ticket}>
        <DirectionTrain item={item}/>
        <ListTrainRoutes item={item}/>
        <ListOfPlaces item={item}/>
      </div>
    ))
  )
};
