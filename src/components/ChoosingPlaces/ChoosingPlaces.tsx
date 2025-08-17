import { useSelector } from "react-redux";
import { ChoosingPlacesHeader } from "./ChoosingPlacesHeader/ChoosingPlacesHeader";
import { NumberOfTickets } from "./NumberOfTickets/NumberOfTickets.tsx";
import { CarriageMap } from "./CarriageMap/CarriageMap.tsx";
import type { RootState } from "../../redux/store/store.ts";

export const ChoosingPlaces = () => {
  const { data } = useSelector((state: RootState) => state.selectedSlice)

  if (!data) <div>Загрузка...</div>

  return (
    <div style={{ width: '960px', backgroundColor: '#FFFFFF' }}>
      <ChoosingPlacesHeader />
      <NumberOfTickets />
      <CarriageMap />
    </div>
  )
}