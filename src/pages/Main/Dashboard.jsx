import Header from "../../components/main/Header";
import Dashboardcom from "../../components/main/Dashboardcom";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();

  return (

    <div className="d-flex pt-2 flex-column  w-100 gap-3 p-3 text-bg-dark">
      <Header />
      <div  className="px-4 p-2 rounded-4 text-bg-light" >
        <span
        className="fw-medium"
          id="dashbord--CBreadcrumbItem"
          onClick={(e) => navigate("/UserManagement")}
        >
          داشبورد
        </span>

      </div>
      <div className="p-2 rounded-4 text-bg-light ">
        <Dashboardcom />
      </div>
    </div>
  );
};

export default Dashboard;
