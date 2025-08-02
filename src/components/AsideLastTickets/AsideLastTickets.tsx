import { LastTicketItem } from "./LastTicket/LastTicketItem";
import styles from  "./AsideLastTickets.module.css";

export const AsideLastTickets = ({ data }: { data: any }) => {
  return (
    <aside>
      <h3 className={styles.title_last_tickets}>ПОСЛЕДНИЕ БИЛЕТЫ</h3>
      <div className={styles.list_last_tickets}>
        {data?.map((item: any, index: any) =>
          index <= 3 - 1 ? (
            <LastTicketItem item={item} key={item.departure._id} />
          ) : null
        )}
      </div>
    </aside>
  );
};
