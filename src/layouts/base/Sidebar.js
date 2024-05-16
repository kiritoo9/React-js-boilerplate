import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Link className="sidebar-logo">ReactBoilerplate</Link>
            </div>
            <div id="sidebarMenu" className="sidebar-body">
                <div className="nav-group show">
                    <Link to="/dashboard" className="nav-label">Dashboard</Link>
                    <ul className="nav nav-sidebar">
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link"><i className="ri-pie-chart-2-line"></i> <span>Finance Monitoring</span></Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-group show">
                    <ul className="nav nav-sidebar">
                        <li className="nav-item">
                            <a href="#" className="nav-link has-sub"><i className="ri-account-circle-line"></i> <span>Masters</span></a>
                            <nav className="nav nav-sub">
                                <Link to="/users" className="nav-sub-link">User</Link>
                            </nav>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;