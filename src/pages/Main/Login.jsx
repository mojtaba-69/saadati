//در صفحه ما اطلاعات را از مدیر سایت میگیریم و اون ها رو بررسی و ولید میکنم و در این صحه از redux , yup ,hook form  استفاده کردم
import { useState } from "react";
import { login } from "../../redux/Store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


// با استفاده از yup فیلد ها رو valid کردم

function Login() {
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().min(4).max(15).required(),
    password: yup.string().min(8).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    dispatch(login({ username: newUsername }));
    alert("خوش امدید");
    navigate("/Dashboard");
    console.log(data);
  };
  return (
    // کامبوننت لاگین رو از core ui ایمبورت کردم و مقداری تغییرش دادم
    <>
      <div
        dir="rtl"
        class="bg-dark min-vh-100 d-flex flex-row align-items-center"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class=" gap-1 card-group d-block d-md-flex row">
                <div class="card col-md-7  p-4 mb-0 rounded-4" id="bg">
                  <div class="card-body">
                    <h1>ورود</h1>
                    <p id="bg">به حساب خود وارد شوید </p>
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                      <div class="input-group mb-3">
                      
                        <input
                          onInput={(e) => setNewUsername(e.target.value)}
                          class=" form-control"
                          type="text"
                          placeholder="نام کاربری"
                          {...register("username")}
                          required
                        />
                      </div>
                      <div class="input-group mb-4">
                      
                        <input
                          class="form-control"
                          type="password"
                          placeholder="رمز ورود"
                          {...register("password")}
                        />
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <button type="submit" class="btn btn-secondary px-4">
                            ورود
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* //اینجا کد های مربوط به باکس کنار فرم لاگین میباشد */}
                {/* //درون این باکس مسیج های مربوط به فیلد های فرم لاگین قرار دارد */}
                <div id="bg" class="card col-md-5 text-white py-5 rounded-4">
                  <div class="card-body text-center">
                    <div className="">
                      <h2 className="mb-4">توجه</h2>
                      <p className="text-end">
                        برای ورود به قسمت مدیریت فقط کافیست نام کاربری و رمزعبور
                        خود را وارد نمایید.
                      </p>
                      {errors.username && <p>{errors.username.message}</p>}
                      {errors.password && <p>{errors.password.message}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
