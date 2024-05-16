import { useNavigate } from "react-router-dom";
import State from "./../../libraries/State";

function Header() {
    const navigate = useNavigate();

    /**
     * Action handlers
     */
    function doLogout() {
        State.getState().removeItem('accessToken', true); // remove access token

        /**
         * Redirect to login
         */
        navigate('/login');
    }

    /**
     * Render view
     */
    return (
        <div className="header-main px-3 px-lg-4">
            <a id="menuSidebar" href="#" className="menu-link me-3 me-lg-4"><i className="ri-menu-2-fill"></i></a>
            <div className="me-auto"></div>
            <div className="dropdown dropdown-skin">
                <a href="#" className="dropdown-link" data-bs-toggle="dropdown" data-bs-auto-close="outside"><i className="ri-settings-3-line"></i></a>
                <div className="dropdown-menu dropdown-menu-end mt-10-f">
                    <label>Skin Mode</label>
                    <nav id="skinMode" className="nav nav-skin">
                        <a href="#" className="nav-link active">Light</a>
                        <a href="#" className="nav-link">Dark</a>
                    </nav>
                </div>
            </div>

            <div className="dropdown dropdown-notification ms-3 ms-xl-4">
                <a href="#" className="dropdown-link" data-bs-toggle="dropdown" data-bs-auto-close="outside"><small>1</small><i className="ri-notification-3-line"></i></a>
                <div className="dropdown-menu dropdown-menu-end mt-10-f me--10-f">
                    <div className="dropdown-menu-header">
                        <h6 className="dropdown-menu-title">Notifications</h6>
                    </div>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="avatar online"><img src="../assets/img/img10.jpg" alt="" /></div>
                            <div className="list-group-body">
                                <p><strong>Dominador Manuel</strong> and <strong>100 other people</strong> reacted to your comment "Tell your partner that...</p>
                                <span>Aug 20 08:55am</span>
                            </div>
                        </li>
                    </ul>
                    <div className="dropdown-menu-footer"><a href="#">Show all Notifications</a></div>
                </div>
            </div>
            <div className="dropdown dropdown-profile ms-3 ms-xl-4">
                <a href="#" className="dropdown-link" data-bs-toggle="dropdown" data-bs-auto-close="outside"><div className="avatar online"><img src="../assets/img/img1.jpg" alt="" /></div></a>
                <div className="dropdown-menu dropdown-menu-end mt-10-f">
                    <div className="dropdown-menu-body">
                        <div className="avatar avatar-xl online mb-3"><img src="../assets/img/img1.jpg" alt="" /></div>
                        <h5 className="mb-1 text-dark fw-semibold">Admin</h5>
                        <p className="fs-sm text-secondary">admin@admin.com</p>

                        <nav className="nav">
                            <a href="#"><i className="ri-edit-2-line"></i> Edit Profile</a>
                            <a href="#"><i className="ri-profile-line"></i> View Profile</a>
                        </nav>
                        <hr />
                        <nav className="nav">
                            <a href="#"><i className="ri-question-line"></i> Help Center</a>
                            <a href="#"><i className="ri-lock-line"></i> Privacy Settings</a>
                            <a href="#" onClick={doLogout}><i className="ri-logout-box-r-line"></i> Log Out</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;