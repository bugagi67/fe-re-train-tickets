import { Outlet } from "react-router-dom";

export const FilterLayouts = () => {
    return (
        <section className="train-card-list">
            <div className="flex-wrapper-content">
                <div>
                    {/* <FilterPanel />
                    <AsideLastTickets data={data} /> */}
                </div>
                <Outlet />
            </div>
        </section>
    )
}