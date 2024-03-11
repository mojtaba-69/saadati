import { Link } from "react-router-dom";

function Login(){
    return (
    <>
        <div className="bg-light h-100 w-100 d-flex justify-content-center align-items-center">
        <div className="rounded-4 bg-primary p-5 d-flex flex-column w-50 justify-content-center align-items-center">
           
            <input className="rounded-3 mb-4 p-2 border border-0" type="text" placeholder="نام کاربری"/>
            <p className="">اطلاعات خود را به درستی وارد نمایید</p>
            <input className="rounded-3 mb-4 p-2 border border-0" type="password" placeholder="رمز ورود"/>
            <p className=""></p>
            <button className="rounded-3 p-2" type="submit"><Link className="link-secondary p-2 text-decoration-none" to={'/Home'}>ورود</Link> </button>   
        </div>
        </div>
      
    
    </>
    )
}

export default Login;