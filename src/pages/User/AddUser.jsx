import Header from "../../components/main/Header";
import AddUserCO from "../../components/user/AddUserCO";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex pt-2 flex-column  w-100 gap-3 p-3 text-bg-dark">
      <Header />
      <div id="" className="px-4 p-2 rounded-4 text-bg-light">
        <span
          id="dashbord--CBreadcrumbItem"
          onClick={(e) => navigate("/UserManagement")}
        >
          مدیریت کاربران
        </span>
        <span className="mx-2">/</span>
        <span
          className="fw-medium"
          id="dashbord--CBreadcrumbItem"
          onClick={(e) => navigate("/AddUser")}
        >
          افزودن کاربر
        </span>
      </div>
      <div className="p-2 rounded-4 text-bg-light ">
        <AddUserCO />
      </div>
    </div>
  );
};

export default AddUser;
