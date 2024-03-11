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
  <CSidebarBrand>Sidebar Brand</CSidebarBrand>
  <CSidebarNav>
    <CNavTitle>Nav Title</CNavTitle>
    <Link to={"/Blogs"}>
    <CNavItem href="#">
      <CIcon customClassName="nav-icon" icon={cilPuzzle} />
      Nav item
    </CNavItem>
    </Link>
    <Link to={"/Home"}>
    <CNavItem href="#">
      <CIcon customClassName="nav-icon" icon={cilPuzzle} />
      With badge
      <CBadge color="primary ms-auto">NEW</CBadge>
    </CNavItem>
    </Link>
    <CNavGroup toggler="Nav dropdown">
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown item
      </CNavItem>
    </CNavGroup>
  </CSidebarNav>
  <CSidebarToggler />
</CSidebar>

      <Outlet />
    </div>
  )
};

export default Layout;