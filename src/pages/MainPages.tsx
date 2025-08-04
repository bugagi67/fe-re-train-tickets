import {AboutAs} from "../components/AboutAs/AboutAs"
import {Reviews} from "../components/Reviews/Reviews"
import {Service} from "../components/Service/Service"
import {dataReviews as data} from "../data/dataReviews"
import {useScrollToHash} from "../hooks/useScrollToHash.ts";

export const MainPages = () => {
  useScrollToHash();

  return (
    <>
      <AboutAs/>
      <Service/>
      <Reviews reviews={data}/>
    </>
  )
}