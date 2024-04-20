import Header from "../../components/main/Header";
import { useNavigate } from "react-router-dom";
import AdvertiseCategoryCO from "../../components/AdvertiseCategory/AdvertiseCategoryCO"
const AdvertiseCategory = ()=>{
    const navigate = useNavigate();
return(
<>
      <div className="d-flex pt-2 flex-column  w-100 gap-3 p-3 text-bg-dark">
        <Header />
        <div className="px-4 p-2 rounded-4 text-bg-light">
       
          <span
            className="fw-medium"
            id="dashbord--CBreadcrumbItem"
            onClick={(e) => navigate("/AdvertiseCategory")}
          >
           مدیریت دسته آگهی
          </span>
        </div>
        <div className="p-2 rounded-4 text-bg-light ">
          < AdvertiseCategoryCO/>
        </div>
      </div>
    </>
)
}
export default AdvertiseCategory