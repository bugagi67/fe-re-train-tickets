import { ChoosingPlaces } from "../components/ChoosingPlaces/ChoosingPlaces.tsx";

export const SeatsPage = () => {
  return (
    <div style={ { maxWidth: '1295px' } }>
      <h1 style={{fontSize: '3rem', fontWeight: '500' ,marginBottom: '50px'}}>ВЫБОР МЕСТ</h1>
      <ChoosingPlaces/>
    </div>
  )
};