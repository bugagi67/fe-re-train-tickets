import { useSelector } from "react-redux";
import { ChoosingPlacesHeader } from "./ChoosingPlacesHeader/ChoosingPlacesHeader";
import { NumberOfTickets } from "./NumberOfTickets/NumberOfTickets.tsx";
import { CarriageMap } from "./CarriageMap/CarriageMap.tsx";

export const ChoosingPlaces = () => {
  const { data } = useSelector( ( state: any ) => state.selectedSlice )

  if ( !data ) <div>Загрузка...</div>

  console.log( data );

  return (
    <>
      <ChoosingPlacesHeader/>
      <NumberOfTickets />
      <CarriageMap />
    </>
  )
}