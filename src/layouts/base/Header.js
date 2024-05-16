import React from "react"
import { useNavigate, Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import userAvatar from "./../../assets/img/img1.jpg";
import State from "./../../libraries/State";

export default function Header() {
    const navigate = useNavigate();

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <Link
          to=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
          className="dropdown-link"
        >
          {children}
        </Link>
    ));

    const toggleSidebar = (e) => {
        e.preventDefault();
        let isOffset = document.body.classList.contains("sidebar-offset");
        if (isOffset) {
          document.body.classList.toggle("sidebar-show");
        } else {
          if (window.matchMedia("(max-width: 991px)").matches) {
            document.body.classList.toggle("sidebar-show");
          } else {
            document.body.classList.toggle("sidebar-hide");
          }
        }
    }

    function NotificationList() {
        /**
         * Example notification format
         */
        const notification = [{
            "avatar": (<img src={userAvatar} alt=""/>),
            "text": (<React.Fragment><strong>Dominador Manuel</strong> and <strong>100 other people</strong> reacted to your comment "Tell your partner that...</React.Fragment>),
            "date": "Aug 20 08:55am",
            "status": "online"
        }]

        /**
         * Render view
         */
        const notiList = notification.map((item, key) => {
          return (
            <li className="list-group-item" key={key}>
              <div className={(item.status === "online") ? "avatar online" : "avatar"}>{item.avatar}</div>
              <div className="list-group-body">
                <p>{item.text}</p>
                <span>{item.date}</span>
              </div>
            </li>
          )
        });
    
        return (
          <ul className="list-group">
            {notiList}
          </ul>
        );
    }

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
            <Link onClick={toggleSidebar} className="menu-link me-3 me-lg-4"><i className="ri-menu-2-fill"></i></Link>
            <div className="me-auto"></div>

            <Dropdown className="dropdown-notification ms-3 ms-xl-4" align="end">
                <Dropdown.Toggle as={CustomToggle}>
                    <small>3</small><i className="ri-notification-3-line"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="mt-10-f me--10-f">
                    <div className="dropdown-menu-header">
                        <h6 className="dropdown-menu-title">Notifications</h6>
                    </div>
                    {NotificationList()}
                    <div className="dropdown-menu-footer"><Link to="#">Show all Notifications</Link></div>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="dropdown-profile ms-3 ms-xl-4" align="end">
                <Dropdown.Toggle as={CustomToggle}>
                    <div className="avatar online">
                    <img src={userAvatar} alt="" />
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="mt-10-f">
                    <div className="dropdown-menu-body">
                    <div className="avatar avatar-xl online mb-3"><img src={userAvatar} alt="" /></div>
                    <h5 className="mb-1 text-dark fw-semibold">Administrator</h5>
                    <p className="fs-sm text-secondary">admin@admin.com</p>

                    <nav className="nav">
                        <Link to=""><i className="ri-edit-2-line"></i> Edit Profile</Link>
                        <Link to=""><i className="ri-profile-line"></i> View Profile</Link>
                    </nav>
                    <hr />
                    <nav className="nav">
                        <Link to=""><i className="ri-question-line"></i> Help Center</Link>
                        <Link onClick={doLogout}><i className="ri-logout-box-r-line"></i> Log Out</Link>
                    </nav>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}