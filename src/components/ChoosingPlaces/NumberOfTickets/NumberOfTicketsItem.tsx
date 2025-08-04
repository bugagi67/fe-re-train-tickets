export const NumberOfTicketsItem = (title: string, placehoplder: string) => {
  return (
    <div>
      <input type="text" placeholder={placehoplder}/>
      <p>{title}</p>
    </div>
  )
};