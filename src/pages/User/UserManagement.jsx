import UserManagement from "../../components/user/UserMngmnt";
import Header from "../../components/main/Header"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return(
  <div className="d-flex flex-column pt-2  w-100 gap-3 p-3 text-bg-dark">
  <Header/>
       <div className="px-4 p-2 rounded-4 text-bg-light">
        
        <span
                className="fw-medium"
          id="dashbord--CBreadcrumbItem"
          onClick={(e) => navigate("/UserManagement")}
        >
          مدیریت کاربران
        </span>
        <span className="mx-2">/</span>
      </div>
      
  <div className="p-2 rounded-4 text-bg-light " >
  <UserManagement/>

  </div>
  </div>

  )

};

export default Home;