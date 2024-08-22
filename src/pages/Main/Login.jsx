//در صفحه ما اطلاعات را از مدیر سایت میگیریم و اون ها رو بررسی و ولید میکنم و در این صحه از redux , yup ,hook form  استفاده کردم
import { useState } from "react";
import { login } from "../../redux/Store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import a from "../../assets/pic/teahub.io-blur-wallpaper-80602.jpg";
// با استفاده از yup فیلد ها رو valid کردم

function Login() {
  const [email, setEmail] = useState();
  const [pass, setPassWord] = useState();
  const [code, setCode] = useState(false);
  const [intercode, setInterCode] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().min(4).required(),
    password: yup.string().min(8).required(),
    intercode: yup.number(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const loginUp = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: email, password: pass }),
      });

      const data = await response.json();

      console.log(data);
      console.log(response);
      if (response) {
        setCode(true);
      } else {
        setCode(false);
      }
    } catch {
      console.log("error");
    }
  };

  const loginUpwithcode = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: pass,
          code: +intercode,
        }),
      });

      const data = await response.json();
      const token = data.access_Tokn;
      console.log("token", token);
      localStorage.setItem("Token", `${token}`);
      if (data.access_Tokn) {
        alert("خوش امدید");
        navigate("/Dashboard");
      }
      console.log(data);
      console.log(response);
    } catch {
      console.log("error");
    }
  };
  // useEffect(()=>{
  //   loginUp()
  // },[])
  const onCodeSubmit = (data) => {
    dispatch(login({ username: email }));
    loginUpwithcode();
    // alert("خوش امدید");
    // navigate("/Dashboard");
    // console.log(data);
  };
  const onFormSubmit = (data) => {
    // dispatch(login({ username: newUsername }));
    loginUp();
    // alert("خوش امدید");
    // navigate("/Dashboard");
    // console.log(data);
  };
  const handleRegister = () => {
    navigate("Register");
  };

  return (
    // کامبوننت لاگین رو از core ui ایمبورت کردم و مقداری تغییرش دادم
    <>
      <img src={a} id="login--back" />
      <div
        dir="rtl"
        class="bg-dark min-vh-100  d-flex flex-row align-items-center"
        id="login--in"
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
                          onInput={(e) => setEmail(e.target.value)}
                          class=" form-control"
                          type="text"
                          placeholder="نام کاربری"
                          {...register("email")}
                          required
                        />
                      </div>
                      <div class="input-group mb-4">
                        <input
                          class="form-control"
                          type="password"
                          placeholder="رمز ورود"
                          {...register("password")}
                          onInput={(e) => setPassWord(e.target.value)}
                        />
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <button type="submit" class="btn btn-secondary px-4">
                            ورود
                          </button>
                        </div>
                        <span className="" onClick={() => handleRegister()}>
                          ثبت نام نکرده اید؟
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
                {/* //اینجا کد های مربوط به باکس کنار فرم لاگین میباشد */}
                {/* //درون این باکس مسیج های مربوط به فیلد های فرم لاگین قرار دارد */}
                <div id="bg" class="card col-md-5 text-white py-5 rounded-4">
                  {!code && (
                    <div class="card-body text-center">
                      <div className="">
                        <h2 className="mb-4">توجه</h2>
                        <p className="text-end">
                          برای ورود به قسمت مدیریت فقط کافیست نام کاربری و
                          رمزعبور خود را وارد نمایید.
                        </p>
                        {errors.username && <p>{errors.username.message}</p>}
                        {errors.password && <p>{errors.password.message}</p>}
                      </div>
                    </div>
                  )}
                  {code && (
                    <div class="p-4 mb-0 rounded-4" id="bg">
                      <div class="card-body my-2">
                        <p id="bg">کد یک بار مصرف را وارد کنید</p>
                        <form onSubmit={handleSubmit(onCodeSubmit)}>
                          <div class="input-group mb-3">
                            <input
                              onInput={(e) => setInterCode(e.target.value)}
                              class=" form-control"
                              type="text"
                              placeholder="کد"
                              {...register("intercode")}
                              required
                            />
                          </div>

                          <div class="row">
                            <div class="col-12">
                              <button
                                type="submit"
                                class="btn btn-secondary col-12 px-4"
                              >
                                ارسال کد
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
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
