import { useLocation} from "react-router-dom";

import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Bottom } from "../../components/Footer/Bottom/Bottom";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar.tsx";

export const MainLayout = () => {
  const location = useLocation();
    return (
        <>
            <Header />
          {location.pathname !== "/" && <ProgressBar />}
            <main>
                <Outlet />
            </main>
            <Footer />
            <Bottom />
        </>
    )
}