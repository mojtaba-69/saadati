import { useState } from "react";
import {login} from '../redux/Store'
import {useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import Dashboard from "./Dashboard";

//با استفاده از yup فیلد ها رو valid کردم

function Login(){
    const [newUsername, setNewUsername ] = useState("");
    const dispatch = useDispatch()
    const schema = yup.object().shape({
      username : yup.string().min(4).max(15).required(),
      password : yup.string().min(8).required(),
    })
    const {register, handleSubmit, formState:{errors}} = useForm({resolver : yupResolver(schema)})

    const onFormSubmit = (data)=>{
      console.log('خوش امدید')
      console.log(data)
      
    }
    return (
    //کامبوننت لاگین رو از core ui ایمبورت کردم و مقداری تغییرش دادم
    <>
      <div dir="rtl" class="bg-light min-vh-100 d-flex flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card-group d-block d-md-flex row">
              <div class="card col-md-7 p-4 mb-0">
                <div class="card-body">
                  <h1>ورود</h1>
                  <p class="text-medium-emphasis">به حساب خود وارد شوید </p>
                  <form onSubmit={handleSubmit(onFormSubmit)}>
                  <div class="input-group mb-3"><span class="input-group-text">
                      <svg class="icon">
                      </svg></span>
                    <input  onInput={e=>setNewUsername(e.target.value)} class="form-control" type="text" placeholder="نام کاربری"{...register("username")} />
                  </div>
                  <div class="input-group mb-4"><span class="input-group-text">
                      <svg class="icon">
                      </svg></span>
                    <input  class="form-control" type="password" placeholder="رمز ورود" {...register("password")}/>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <button   type="submit" onClick={()=>dispatch(login({username : newUsername}))} class="btn btn-primary px-4" ><Link className="link-dark p-2 text-decoration-none" to={'Dashboard'}>ورود</Link> </button>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
                //اینجا کد های مربوط به باکس کنار فرم لاگین میباشد
                //درون این باکس مسیج های مربوط به فیلد های فرم لاگین قرار دارد
              <div class="card col-md-5 text-white bg-primary py-5">
                <div class="card-body text-center">
                  <div className=""> 
                    <h2 className="mb-4">توجه</h2>
                    <p className="text-end">برای ورود به قسمت مدیریت فقط کافیست نام کاربری و رمزعبور خود را وارد نمایید.</p>
                    {errors.username &&
                    <p>{errors.username.message}</p>}
                    {errors.password &&
                    <p>{errors.password.message}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
    )
}

export default Login;
        // <div className="bg-light h-100 w-100 d-flex justify-content-center align-items-center">
        // <div className="rounded-4 bg-primary bg-opacity-25 bg-gradient p-5 d-flex flex-column w-50 justify-content-center align-items-center">
           
        //     <input onInput={e=>setUsername(e.target.value)} className="rounded-3 mb-4 p-2 border border-0" type="text" placeholder="نام کاربری"/>
        //     <p className="fs-6 fw-light">{username.length == "" ? "نام کاربری خود را واردد نمایید" : username.length !=4 ? "نامکاربری باید حداقل 4 کاراکتر باشد" : ""}</p>
        //     <input onInput={e=>setpassword(e.target.value)} className="rounded-3 mb-4 p-2 border border-0" type="password" placeholder="رمز ورود"/>
        //     <p className="fs-6 fw-light">{password.length == "" ? "رمز خود را واردد نمایید" : password.length !=8 ? "رمز باید حداقل 8 کاراکتر باشد" : ""}</p>
        //     {/* <button className="rounded-3 p-2" type="submit"><Link className="link-secondary p-2 text-decoration-none" to={'/Home'}>ورود</Link> </button>    */}
        //     <CButton color="secondary" variant="outline"><Link className="link-secondary p-2 text-decoration-none" to={'/Home'}>ورود</Link></CButton>

        // </div>
        // </div>
