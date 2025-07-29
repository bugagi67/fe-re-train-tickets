import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Bottom } from "../../components/Footer/Bottom/Bottom";

export const MainLayout = () => {
    return (
        <>
            <Header searchFormType={"main"} />
            <main>
                <Outlet />
            </main>
            <Footer />
            <Bottom />
        </>
    )
}