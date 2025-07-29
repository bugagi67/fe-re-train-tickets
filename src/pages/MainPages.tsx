import { AboutAs } from "../components/AboutAs/AboutAs"
import { Reviews } from "../components/Reviews/Reviews"
import { Service } from "../components/Service/Service"
import { dataReviews as data } from "../data/dataReviews"

export const MainPages = () => {
    return (
        <>
            <AboutAs />
            <Service />
            <Reviews reviews={data}/>
        </>
    )
}