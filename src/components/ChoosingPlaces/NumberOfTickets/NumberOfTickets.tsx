import { useSelector } from "react-redux";
import styles from "./NumberOfTickets.module.css";

export const NumberOfTickets = () => {
  const { allSeats } = useSelector( state => state.selectedSlice );

  return (
    <>
      <h1 className={ styles.title_component }>Количество билетов</h1>
      <div className={ styles.wrapper_number_of_tickets }>
        <div className={ styles.number_of_tickets_item }>
          <div>
            <input type="text"/>
          </div>
          <p className={ styles.placeholder }>Взрослых — { allSeats }</p>
          <div className={ styles.description }>Можно добавить еще { allSeats } пассажиров
          </div>
        </div>
        <div className={ styles.number_of_tickets_item }>
          <div>
            <input type="text"/>
          </div>
          <p className={ styles.placeholder }>Детских — { allSeats / 2 } </p>
          <div className={ styles.description }>Можно добавить еще { Math.floor( allSeats / 2 ) } детей до 10 лет.Свое
            место в вагоне, как у взрослых, но
            дешевле в среднем на 50-65%
          </div>
        </div>
        <div className={ styles.number_of_tickets_item }>
          <div>
            <input type="text"/>
          </div>
          <p className={ styles.placeholder }>Детских «без места» — </p>

        </div>
      </div>
    </>
  )
}