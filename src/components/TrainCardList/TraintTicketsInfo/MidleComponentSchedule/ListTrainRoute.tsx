import { ScheduleRoute } from "./ScheduleRoute/ScheduleRoute"

export const ListTrainRoutes = ({item}: {item: any}) => {
  return (
    <div className="schedule-list">
      <ScheduleRoute item={item} />
    </div>
  )
}