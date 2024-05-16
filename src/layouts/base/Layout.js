import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
    return (
        <div>
            <Sidebar />
            <Header />

            <div className="main main-app p-3 p-lg-4">
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout;