import styles from "./Map.module.css"

export const Map = () => {
  return (
    <div>
      <div className={ styles.map_container }>
        <div className={ styles.first_line_seats }>
          <div className={ styles.carriage_section }></div>
          <div className={ styles.carriage_section }></div>
          <div className={ styles.carriage_section }></div>
          <div className={ styles.carriage_section }></div>
          <div className={ styles.carriage_section }></div>
          <div className={ styles.carriage_section }></div>
          <div className={ styles.carriage_section }></div>
          <div className={ styles.carriage_section }></div>
        </div>
        <div className={styles.second_line}></div>
        <div className={styles.last_line}>
          <div className={ styles.side_seats }></div>
          <div className={ styles.side_seats }></div>
          <div className={ styles.side_seats }></div>
          <div className={ styles.side_seats }></div>
          <div className={ styles.side_seats }></div>
          <div className={ styles.side_seats }></div>
          <div className={ styles.side_seats }></div>
          <div className={ styles.side_seats }></div>
        </div>
      </div>
    </div>
  )
}