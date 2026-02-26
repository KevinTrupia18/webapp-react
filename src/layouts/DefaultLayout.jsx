
// src/layouts/DefaultLayout.jsx
import { Outlet } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";

const DefaultLayout = () => {
    const { isLoading } = useGlobal();

    return (
        <>
            <MainHeader />
            <main className="container mt-4">
                <Outlet />
            </main>
            {isLoading && <Loader />}
        </>
    );
};

export default DefaultLayout;