import { Outlet, Link } from "react-router-dom";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CNavTitle,
  CNavItem,
  CNavGroup,
  CBadge,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPuzzle } from "@coreui/icons";
import Dashboard from "./Dashboard";
import UserManagement from "./UserManagement";

const Layout = () => {
  return (
    <div className="d-flex h-100">
      <CSidebar className="">
        <CSidebarBrand className="fs-4 text fw-bold">میز کار</CSidebarBrand>
        <CSidebarNav className="gap-3">
          <Link
            className="ps-5 pt-2 mt-3 fs-6 text link-light link-underline link-underline-opacity-0"
            to={"/Dashboard"}
          >
            <CNavItem>
              <CIcon customClassName="nav-icon" />
              داشبود
            </CNavItem>
          </Link>
          <Link  className="ps-5 pt-2 fs-6 text link-light link-underline link-underline-opacity-0" to={"/UserManagement"}>
            <CNavItem >
              <CIcon customClassName="nav-icon" />
              مدیریت کاربران
            </CNavItem>
          </Link>
        </CSidebarNav>
        <CSidebarToggler />
      </CSidebar>

      <Outlet />
    </div>
  );
};

export default Layout;
