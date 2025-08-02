import {TrainTicketsInfo} from "./TraintTicketsInfo/TraintTicketsInfo";
import {useSelector} from "react-redux";
import styles from "./TrainCardList.module.css";
import {TrainCardListHeader} from "./TrainCardListHeader/TrainCardListHeader";
import {TrainPagination} from "./TraintTicketsInfo/TrainPagination/TrainPagination.tsx";


export const TrainCardList = () => {
  const {totalCount} = useSelector((state: any) => state.searchParams);

  return (
    <section className={styles.train_card_list}>
      <TrainCardListHeader count={totalCount}/>
      <TrainTicketsInfo/>
      <TrainPagination/>
    </section>
  );
};
