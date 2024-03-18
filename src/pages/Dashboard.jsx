import Header from "../components/Header"
import Dashboardcom from "../components/Dashboardcom";
import {MenuVisibleContexProvider} from "../context/Context"
const Dashboard = () => {
  return (
    <div className="">
      <MenuVisibleContexProvider>

        <Header/>
        <Dashboardcom/>

      </MenuVisibleContexProvider>
    
    </div>

  );
};

export default Dashboard;
