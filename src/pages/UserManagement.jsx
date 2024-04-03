import UserManagement from "../components/user/UserMngmnt";
import Header from "../components/main/Header"
const Home = () => {
  return(


  <div className="d-flex flex-column pt-2  w-100 gap-3 p-3 text-bg-dark">
  <Header/>
  <div className="p-2 rounded-4 text-bg-light " >
  <UserManagement/>

  </div>
  </div>

  )

};

export default Home;