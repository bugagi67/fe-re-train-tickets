import { TimeSlider } from "../../TimeSlider/TimeSlider.js";

export const TimeSliderFilter = ({type}: {type: string}) => {
  return (
    <div className="filtered-time-component" style={{ padding: "20px" }}>
      {type === "there" ? (
        <>
          <TimeSlider title={"Время отбытия"} type={"there"} />
          <TimeSlider title={"Время прибытия"} type={"there"} />
        </>
      ) : (
        <>
          <TimeSlider title={"Время отбытия"} type={"back"} />
          <TimeSlider title={"Время прибытия"} type={"back"} />{" "}
        </>
      )}
    </div>
  );
};
