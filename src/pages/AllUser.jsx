import AllUserCO from "../components/user/AllUserCO"
import Header from "../components/main/Header"

const AllUser = ()=>{

    return (
    <div className="d-flex pt-2 flex-column  w-100 gap-3 p-3 text-bg-dark" >
        <Header/>
        <div className="p-2 rounded-4 text-bg-light " id="alluser">
        <AllUserCO/>
        </div>
    </div>
        
    )
}

export default AllUser