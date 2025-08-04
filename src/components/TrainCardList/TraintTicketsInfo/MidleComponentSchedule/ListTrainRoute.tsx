import { ScheduleRoute } from "./ScheduleRoute/ScheduleRoute"

export const ListTrainRoutes = ({item}: {item: any}) => {
  return (
    <div style={{padding: "50px 0 20px"}}>
      <ScheduleRoute item={item} />
    </div>
  )
}