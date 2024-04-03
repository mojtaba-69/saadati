import Advertise from "../components/advertise/AdvertiseManagementCO";
import Header from "../components/main/Header";

const AllAdvertise = ()=>{
return(
    <div className="d-flex pt-2 flex-column  w-100 gap-3 p-3 text-bg-dark">
        <Header/>
        <div className="p-2 rounded-4 text-bg-light ">
        <Advertise/>

        </div>
        
    </div>
)
}
export default AllAdvertise;