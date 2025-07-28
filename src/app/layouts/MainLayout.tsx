import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Bottom } from "../../components/Footer/Bottom/Bottom";

export const MainLayout = () => {
    return (
        <div className="layout_container">
            <Header searchFormType={"main"}/>
            <main>
                <Outlet />
            </main>
            <Footer />
            <Bottom />
        </div>
    )
}