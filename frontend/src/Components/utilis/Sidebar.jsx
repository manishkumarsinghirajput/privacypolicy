import React, { useEffect, useState } from "react";
import { Link,useLocation,useNavigate} from "react-router-dom";
import { httpFile } from "../../../config/axiosConfig";
function Sidebar() {



const [data, setData] = useState([]);
const [cmsDropdown, setCmsDropdown] = useState(false);
const [ContactDropdown, setContactDropdown] = useState(false);
const location = useLocation();
const path = location.pathname;




const sidebarHideShow = () => {
  if (document.body.classList.contains("sidebar-show")) {
    document.body.classList.add("sidebar-gone");
    document.body.classList.remove("sidebar-mini");
    document.body.classList.remove("sidebar-show");
  }
};

useEffect(() => {
  sidebarHideShow();
}, []);

  return (
    <div>
      <div className="main-sidebar sidebar-style-2 shadow">
        <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
  <Link to="/dashboard">
    <img
      src="./src/assets/limit.png"
      alt="logo"
      className="mx-auto d-block"
      style={{marginRight:'9px', paddingTop :"20px" ,width: "120px", height:"75px",}}
    />
  </Link>
</div>
<div className="sidebar-brand sidebar-brand-sm">
  <Link to="/dashboard">
    <img
      src="./src/assets/limit.png"
      alt="logo"
      className="mx-auto d-block"
      style={{ width: "65px", height:"65px",}}
    />
  </Link>
</div>

          <ul className="sidebar-menu">
            <li className="menu-header"></li>
            <li
             className={`nav-item ${path === "/dashboard" ? "active" : ""}`}
             onClick={() => {}}
           >
              <Link to={"/dashboard"} className="nav-link ">
                <i className="fas fa-fire"></i>
                <span>DASHBOARD</span>
              </Link>
            </li>
          
        
        
            <li
      className={`nav-item ${path === "/userlist" ? "active" : ""}`}
      onClick={() => {}}
    >
      <Link to="/userlist" className="nav-link">
        <i className="fas fa-users"></i>
        <span>USER</span>
      </Link>
    </li>

    
    <li
      className={`nav-item ${path === "/teacherlist" ? "active" : ""}`}
      onClick={() => {}}
    >
      <Link to="/teacherlist" className="nav-link">
        <i className="fas fa-users"></i>
        <span>TeacherList</span>
      </Link>
    </li>


    <li
      className={`nav-item ${path === "/videolist" ? "active" : ""}`}
      onClick={() => {}}
    >
      <Link to="/videolist" className="nav-link">
        
        <i class="fa-solid fa-video"></i>
        <span>VIDEOLIST</span>
      </Link>
    </li>

    <li
      className={`nav-item ${path === "/subscription" ? "active" : ""}`}
      onClick={() => {}}
    >
      <Link to="/subscription" className="nav-link">
        <i className="fas fa-users"></i>
        <span>PLAN</span>
      </Link>
    </li>

         
    <li className={`nav-item ${path === "/subcribers" ? "active" : ""}`}
      onClick={() => {}}>
        <Link to="/subcribers" className="nav-link">
        <i className="fas fa-users"></i>
        <span>SUBCRIBERS</span>
      </Link>

    </li>

<li className={`nav-item ${path === "/categorylist" ? "active" : ""}`}
onClick={() => {}}>
  <Link to="/categorylist" className="nav-link">
    <i className="fas fa-users"></i>
    <span>CategoryList</span>
  </Link>
</li>

    <li
              onClick={(e) => setCmsDropdown(!cmsDropdown)}
              className={`nav-item dropdown ${cmsDropdown ? "active" : ""}`}
            >
              <a href="#" className="nav-link has-dropdown">
                <i className="fa-solid fa-file-lines"></i> <span>CMS</span>
              </a>
              <ul
                className="dropdown-menu"
                style={{ display: cmsDropdown ? "block" : "none" }}
              >
                <li
                  className={`${path === "/termsandcondition" ? "active" : ""}`}
                >
                  <Link
                    to={"/termsandcondition"}
                    className="nav-link"
                    onClick={sidebarHideShow}
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className={`${path === "/privacypolicy" ? "active" : ""}`}>
                  <Link
                    className="nav-link"
                    to={"/privacypolicy"}
                    onClick={sidebarHideShow}
                  >
                    Privacy Policy
                  </Link>
                </li>
        <li className={`${path === "/userlist" ? "active" : ""}`}>

        <Link to={"/userlist"}
       className="nav-link"
     onClick={sidebarHideShow}>

</Link>
                </li>

       

            

               
              </ul>
            </li>

            <li className={`nav-item ${path === "/contactus" ? "active" : ""}`}
      onClick={() => {}}>
        <Link to="/contactus" className="nav-link">
        <i className="fas fa-address-book"></i>
        <span>HELP</span>
      </Link>

    </li>
             </ul>

             
        </aside>
      </div>
    </div>
  );
}

export default Sidebar;