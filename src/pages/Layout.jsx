import { Outlet, Link } from "react-router-dom";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CNavItem,
  CSidebarToggler,CNavGroup,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {  useSelector } from "react-redux";


const Layout = () => {
  const selector = useSelector((state)=> state.activeSideBar.active)
  return (
    <>
     
      {/* {selector &&  */}
      
      <div className="d-flex h-100">
     <CSidebar className="">
       <CSidebarBrand className="fs-4 text fw-bold">میز کار</CSidebarBrand>
       <CSidebarNav className="gap-3">
         <Link
           className=" text-center pt-2 mt-3 fs-6 text link-light link-underline link-underline-opacity-0"
           to={"/Dashboard"}
         >
           <CNavItem>
             <CIcon customClassName="nav-icon" />
             داشبود
           </CNavItem>
         </Link>

      
         <CNavGroup toggler={
        <Link  className="ps-5 pt-2 fs-6 text link-light link-underline link-underline-opacity-0" to={"/UserManagement"}>
          <CIcon customClassName="nav-icon"/>              مدیریت کاربران

          </Link>
      }
    >
      <CNavItem className="pt-3 mb-3" ><Link className="text-center ps-5  fs-6 text link-light link-underline link-underline-opacity-0" to={"/AddUser"}>افزودن کاربر</Link></CNavItem>
      <CNavItem className="pt-3 mb-3" ><Link className="text-center ps-5  fs-6 text link-light link-underline link-underline-opacity-0" to={"/AllUser"}>نمایش همه کاربران</Link></CNavItem>
    </CNavGroup>
       </CSidebarNav>
       <CSidebarToggler />
     </CSidebar>

     <Outlet />
      </div>
      {/* } */}
      
    
    </>

  );
};

export default Layout;
