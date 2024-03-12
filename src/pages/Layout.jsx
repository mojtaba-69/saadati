import { Outlet, Link } from "react-router-dom";
import { CSidebar, CSidebarBrand,CSidebarNav,CNavTitle,CNavItem ,CNavGroup,CBadge,CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import  {cilPuzzle} from '@coreui/icons'
import Blogs from "./Blogs";
import Home from "./Home";

const Layout = () => {
  return (
    <div className="d-flex h-100">
      <CSidebar className="" >
  <CSidebarBrand className="fs-4 text fw-bold">میز کار</CSidebarBrand>
  <CSidebarNav>
    <Link className="ps-5 pt-2 fs-6 text link-light link-underline link-underline-opacity-0" to={"/Blogs"}>
    <CNavItem  >
      <CIcon customClassName="nav-icon"  />
      داشبود
    </CNavItem>
    </Link>
    <Link to={"/Home"}>
    <CNavItem href="#">
      <CIcon customClassName="nav-icon"  />
      With badge
      <CBadge color="primary ms-auto">NEW</CBadge>
    </CNavItem>
    </Link>
    
  </CSidebarNav>
  <CSidebarToggler />
</CSidebar>

      <Outlet />
    </div>
  )
};

export default Layout;