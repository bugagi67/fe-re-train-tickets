import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export const DefaultLayout = () => {
    return (
        <div className="layout_container">
            <Header searchFormType={"default"}/>
            <main>
                <Outlet />
            </main>
        </div>
    )
}