import { useState } from "react";
import { Link } from "react-router-dom";

function Login(){
    const [username, setUsername ] = useState("");
    const [password, setpassword ] = useState("")

    return (
    <>
        <div className="bg-light h-100 w-100 d-flex justify-content-center align-items-center">
        <div className="rounded-4 bg-primary bg-opacity-25 bg-gradient p-5 d-flex flex-column w-50 justify-content-center align-items-center">
           
            <input onInput={e=>setUsername(e.target.value)} className="rounded-3 mb-4 p-2 border border-0" type="text" placeholder="نام کاربری"/>
            <p className="fs-6 fw-light">{username.length == "" ? "نام کاربری خود را واردد نمایید" : username.length !=4 ? "نامکاربری باید حداقل 4 کاراکتر باشد" : ""}</p>
            <input onInput={e=>setpassword(e.target.value)} className="rounded-3 mb-4 p-2 border border-0" type="password" placeholder="رمز ورود"/>
            <p className="fs-6 fw-light">{password.length == "" ? "رمز خود را واردد نمایید" : password.length !=8 ? "رمز باید حداقل 8 کاراکتر باشد" : ""}</p>
            <button className="rounded-3 p-2" type="submit"><Link className="link-secondary p-2 text-decoration-none" to={'/Home'}>ورود</Link> </button>   
        </div>
        </div>
      
    
    </>
    )
}

export default Login;