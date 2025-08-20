import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store/store";
import { useDispatch } from "react-redux";
import { setTotalCoast } from "../../../../redux/slice/selectedSlice";

export const useCalculateTotalCoast = () => {
  const dispatch = useDispatch();
  const { departure, arrival, currentCarriage, isWifi, isNutrition, isLinen } =
    useSelector((state: RootState) => state.selectedSlice);

  if (currentCarriage) {
    const topSeatsCountDeparture: number =
      departure.filter((item) => item % 2 === 0 && item < 33).length *
      currentCarriage.coach.top_price;

    const bottomSeatsCountDeparture: number =
      departure.filter((item) => item % 2 !== 0 && item < 33).length *
      currentCarriage.coach.bottom_price;

    const topSeatsCountSeatsArrival: number =
      arrival.filter((item) => item % 2 === 0 && item < 33).length *
      currentCarriage.coach.top_price;

    const bottomCountSeatsArrival: number =
      arrival.filter((item) => item % 2 !== 0 && item < 33).length *
      currentCarriage.coach.bottom_price;

    const sideCountSeatsDeparture: number =
      departure.filter((item) => item > 32).length *
      currentCarriage.coach.side_price;

    const sideCountSeatsArrival: number =
      arrival.filter((item) => item > 32).length *
      currentCarriage.coach.side_price;

    const isLinensIncluded: boolean = currentCarriage.coach.is_linens_included;
    const wiFiPrice: number = currentCarriage.coach.wifi_price;
    const linensPrice: number = isLinensIncluded
      ? 0
      : currentCarriage.coach.linens_price;

    const total: number =
      topSeatsCountDeparture +
      bottomSeatsCountDeparture +
      sideCountSeatsDeparture +
      topSeatsCountSeatsArrival +
      sideCountSeatsArrival +
      bottomCountSeatsArrival +
      (isWifi ? wiFiPrice : 0) +
      (currentCarriage.coach.is_linens_included
        ? 0
        : isLinen
        ? linensPrice
        : 0) +
      (isNutrition ? 300 : 0);

    const countSeats: number =
      departure.filter((item) => item % 2 === 0 && item < 33).length +
      departure.filter((item) => item % 2 !== 0 && item < 33).length +
      arrival.filter((item) => item % 2 === 0 && item < 33).length +
      arrival.filter((item) => item % 2 !== 0 && item < 33).length +
      departure.filter((item) => item > 32).length +
      arrival.filter((item) => item > 32).length;

    dispatch(setTotalCoast(total));

    return {
      topSeatsCountDeparture,
      bottomSeatsCountDeparture,
      sideCountSeatsDeparture,
      topSeatsCountSeatsArrival,
      sideCountSeatsArrival,
      bottomCountSeatsArrival,
      linensPrice,
      wiFiPrice,
      isLinensIncluded,
      total,
      countSeats,
    };
  }
};
