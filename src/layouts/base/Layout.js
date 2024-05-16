import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
    const d = new Date();
    const year = d.getFullYear();

    return (
        <div>
            <Sidebar />
            <Header />

            <div className="main main-app p-3 p-lg-4">
                <main>
                    <Outlet />
                </main>

                <div class="main-footer mt-5">
                    <span>&copy; {year}. ReactJS-Boilerplate</span>
                </div>
            </div>
        </div>
    )
}

export default Layout;