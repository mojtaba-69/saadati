import AllAdvertiseCO from "../../components/advertise/AllAdvertiseCO"
import Header from "../../components/main/Header"
import { useNavigate } from "react-router-dom";


const AllAdvertise = ()=>{
    const navigate = useNavigate();

return(
    <div className="d-flex pt-2 flex-column  w-100 gap-3 p-3 text-bg-dark" >
    <Header/>
    <div  className="px-4 p-2 rounded-4 text-bg-light" >
        <span
          id="dashbord--CBreadcrumbItem"
          onClick={(e) => navigate("/UserManagement")}
        >
          مدیریت آگهی ها
        </span>
        <span className="mx-2">/</span>
        <span
          className="fw-medium"
          id="dashbord--CBreadcrumbItem"
          onClick={(e) => navigate("/AddUser")}
        >
            همه آگهی ها
        </span>
      </div>
    <div className="p-2 rounded-4 text-bg-light " id="alluser">
    <AllAdvertiseCO/>
    </div>
</div>
)
}

export default AllAdvertise