import {Outlet} from "react-router-dom";
import {Filter} from "../../components/Filter/Filter";
import {AsideLastTickets} from "../../components/AsideLastTickets/AsideLastTickets.tsx";
import {useGetLastTickets} from "../../hooks/useGetLastTickets.ts";


export const DefaultLayout = () => {
  const {loading, error, lastTickets} = useGetLastTickets();


  return (
    <div
      style={{
        display: "flex",
        maxWidth: "1490px",
        margin: "0 auto",
        gap: "80px",
        marginTop: "100px",
        marginBottom: "190px"
      }}
    >
      <div style={{width: "364px", display: "flex", flexDirection: "column"}}>
        <Filter/>
        {error ? <div>ERROR</div> : loading ? <div>Loading...</div> : <AsideLastTickets data={lastTickets}/>}
      </div>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}