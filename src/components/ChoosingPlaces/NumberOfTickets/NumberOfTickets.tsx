export const NumberOfTickets = () => {
  return (
    <>
      <h1>Количество билетов</h1>
      <div style={ { display: "flex", flexDirection: "row", gap: "10px" } }>
        <div>
          <input type="text"/>
          <p>Можно добавить еще __ пассажиров</p>
        </div>
        <div>
          <input type="text"/>
          <p>Можно добавить еще __ пассажиров</p>
        </div>
        <div>
          <input type="text"/>
          <p>Можно добавить еще __ пассажиров</p>
        </div>
      </div>
    </>
  )
}