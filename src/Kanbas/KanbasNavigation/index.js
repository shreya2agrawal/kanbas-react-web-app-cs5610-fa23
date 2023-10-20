import { Link, useLocation } from "react-router-dom";
import { FaBook, FaInbox, FaHistory, FaQuestionCircle, FaTv, FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoSrc from "../Images/northeastern-university-logo.png";
import "./index.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

function KanbasNavigation() {
  const navigationItems = [
    { label: 'NEU', to: '/', isLogo: true, logoSrc: logoSrc },
    { label: 'Account', to: '/Kanbas/Account', icon: <FontAwesomeIcon icon="fa-solid fa-user" size="2x" className="account-icon"/> },    
    { label: 'Dashboard', to: '/Kanbas/Dashboard', icon: <FontAwesomeIcon icon="dashboard" className="wd-icon" /> },
    { label: 'Courses', to: '/Kanbas/Courses', icon: <FaBook className="wd-icon" /> },
    { label: 'Calendar', to: '/Kanbas/Calendar', icon: <FontAwesomeIcon icon="fa-solid fa-calendar-days" size="2x" className="wd-icon"/> },
    { label: 'Inbox', to: '/Kanbas/Inbox', icon: <FaInbox className="wd-icon" /> },
    { label: 'History', to: '/Kanbas/History', icon: <FaHistory className="wd-icon" /> },
    { label: 'Studio', to: '#', icon: <FaTv className="wd-icon" /> },
    { label: 'Commons', to: '/Kanbas/History', icon: <FaArrowRight className="wd-icon" /> },
    { label: 'Help', to: '/Kanbas/Help', icon: <FaQuestionCircle className="wd-icon" /> }
  ];

  const { pathname } = useLocation();

  return (
    <div className="list-group wd-kanbas-navigation">
      {navigationItems.map((item, index) => (
        item.isLogo ? (
          <img key={index} src={item.logoSrc} height="65px" width="80px" alt={item.label} />
        ) : (
          <Link
            key={index}
            to={item.to}
            className={`list-group-item ${pathname.includes(item.label) && "active"}`}
          >
            {item.icon}
            <br/>
            {item.label}
          </Link>
        )
      ))}
    </div>
  );
}

export default KanbasNavigation;