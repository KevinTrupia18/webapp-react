
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <Header />

            <div className="container mt-4">
                <Outlet />
            </div>
        </>
    );
}

export default DefaultLayout;