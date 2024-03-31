import AllUserCO from "../components/user/AllUserCO"
import Header from "../components/main/Header"

const AllUser = ()=>{

    return (
    <div className="w-100" >
        <Header/>
        <div id="alluser">
        <AllUserCO/>
        </div>
    </div>
        
    )
}

export default AllUser