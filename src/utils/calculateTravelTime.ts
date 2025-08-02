import {fromUnixTime, intervalToDuration} from 'date-fns';


export const calculateTravelTime = (departure: any, arrival: any) => {
  const departureDate = fromUnixTime(departure);
  const arrivalDate = fromUnixTime(arrival);

  const duration = intervalToDuration({start: departureDate, end: arrivalDate});

  const hours = duration.hours || 0;
  const minutes = duration.minutes || 0;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
};