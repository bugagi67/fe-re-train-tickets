import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconConveniences } from "../../../../IconConveniences/IconConveniences";
import { LineOfPlaces } from "../LineOfPlaces/LineOfPlaces";
import { Button } from "../../../../../ui/Button/Button";
import { useFindSeats } from "../../../../../hooks/useFindSeats.ts";
import { setRouteData } from "../../../../../redux/slice/selectedSlice";
import style from "./ListOfPlaces.module.css";

export const ListOfPlaces = ( { item }: { item: any } ) => {
  const [ shouldFetch, setShouldFetch ] = useState( false );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { response } = useFindSeats(
    item.departure._id,
    !shouldFetch
  );

  const handleButtonClick = () => {
    setShouldFetch( true );
    dispatch( setRouteData( item ) );
    navigate( `/trains/${ item.departure._id }/seats` );
  }

  return (
    <div className={ style.list_of_places }>
      <LineOfPlaces item={ item }/>
      <div>
        <IconConveniences item={ item }/>
        <Button
          title={ "Выбрать места" }
          variant={ "card" }
          onClick={ () => handleButtonClick() }
        />
      </div>
    </div>
  );
};