import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store/store";

export const useCalculateTotalCoast = () => {
  const { departure, arrival, currentCarriage } = useSelector(
    (state: RootState) => state.selectedSlice
  );

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
    // const wiFiPrice: number = currentCarriage.coach.wifi_price;
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
      // wiFiPrice +
      linensPrice;

    const countSeats: number =
      departure.filter((item) => item % 2 === 0 && item < 33).length +
      departure.filter((item) => item % 2 !== 0 && item < 33).length +
      arrival.filter((item) => item % 2 === 0 && item < 33).length +
      arrival.filter((item) => item % 2 !== 0 && item < 33).length +
      departure.filter((item) => item > 32).length +
      arrival.filter((item) => item > 32).length;

    return {
      topSeatsCountDeparture,
      bottomSeatsCountDeparture,
      sideCountSeatsDeparture,
      topSeatsCountSeatsArrival,
      sideCountSeatsArrival,
      bottomCountSeatsArrival,
      linensPrice,
      // wiFiPrice,
      isLinensIncluded,
      total,
      countSeats,
    };
  }
};
