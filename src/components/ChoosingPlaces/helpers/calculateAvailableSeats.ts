interface IProps {
  index: number,
  available: boolean | "active"
}

export const calculateAvailableSeats = ( arr: IProps[], type: string ) => {
  let top: number = 0;
  let bottom: number = 0;
  arr.forEach( ( item ) => {
    if ( item.available ) {
      if ( item.index % 2 ) {
        top++
      } else {
        bottom++
      }
    }
  } )
  return type === "top" ? top : type === "bottom" ? bottom : type === "all" ? bottom + top : null;
}