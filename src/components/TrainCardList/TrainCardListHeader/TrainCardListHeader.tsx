import {Sorting} from "./Sorting/Sorting.tsx";
import {NumberTicketsPerPage} from "./NumberTicketsPerPage/NumberTicketsPerPage.tsx";
import styles from "./TrainCardListHeader.module.css"

export const TrainCardListHeader = ({count}: {count: any}) => {
  return (
    <div className={styles.header_train_card_list}>
      <div className={styles.routes_found}>найдено: {count}</div>
      <Sorting/>
      <NumberTicketsPerPage/>
    </div>
  );
};
