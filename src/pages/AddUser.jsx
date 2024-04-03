import Header from "../components/main/Header";
import AddUserCO from '../components/user/AddUserCO'
const AddUser = () => {
    return (
      <div className="d-flex pt-2 flex-column  w-100 gap-3 p-3 text-bg-dark">
      <Header/>
      <div className="p-2 rounded-4 text-bg-light ">

      <AddUserCO/>
      </div>
      </div>
    )
  };
  
  export default AddUser;