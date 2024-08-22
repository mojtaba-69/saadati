
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [lastName, setLastName] = useState();
  const [fristName, setFristName] = useState();
  const [age, setAge] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required(),
    lastname: yup.string().required(),
    fristname: yup.string().required(),
    password: yup.string().required(),
   
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sign = async (event) => {

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          frist_name: fristName,
          last_name: lastName,
          age: +age,
        }),
      });
      console.log("email:", email);
      console.log("frist name:", fristName);
      console.log("last name:", lastName);
      console.log("age:", age);
      console.log("pass:", password);

      const data = await response.json();
      if(data.statusCode === 200 ){
        navigate('/')
        console.log('seccss')
      }
      console.log("date", data);
      console.log("res", response);
    } catch {
      console.log("error");
    }
  };

  const onFormSubmit = (data) => {
    sign();
    console.log(data);
   
  };

  return (
    <div class="bg-light min-vh-100 d-flex w-100 flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card mb-4 mx-4">
              <form onSubmit={handleSubmit(onFormSubmit)}>
                <div class="card-body p-4">
                  <h1>فرم ثبت نام</h1>
                  <p class="text-medium-emphasis">حساب کاربری خود را بسازید</p>
                  <div class="input-group mb-3">
                    <span class="input-group-text">
                      <svg class="icon"></svg>
                    </span>
                    <input
                      onInput={(e) => setEmail(e.target.value)}
                      class="form-control"
                      type="text"
                      placeholder="ایمیل"
                      {...register("email")}
                    />
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">
                      <svg class="icon"></svg>
                    </span>
                    <input
                      onInput={(e) => setFristName(e.target.value)}
                      class="form-control"
                      type="text"
                      placeholder="نام"
                      {...register("fristname")}
                    />
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">
                      <svg class="icon"></svg>
                    </span>
                    <input
                      onInput={(e) => setLastName(e.target.value)}
                      class="form-control"
                      type="text"
                      placeholder="نام خانوادگی"
                      {...register("lastname")}
                    />
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">
                      <svg class="icon"></svg>
                    </span>
                    <input
                      onInput={(e) => setAge(e.target.value)}
                      class="form-control"
                      placeholder="سن"
                      {...register("age")}
                    />
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">
                      <svg class="icon"></svg>
                    </span>
                    <input
                      onInput={(e) => setPassword(e.target.value)}
                      class="form-control"
                      type="password"
                      placeholder="رمز ورود"
                      {...register("password")}
                    />
                  </div>
                  <div class="input-group mb-4">
                    <span class="input-group-text">
                      <svg class="icon"></svg>
                    </span>
                    <input
                      class="form-control"
                      type="password"
                      placeholder="تکرار رمز ورود"
                      {...register("confirmPassword")}
                    />
                  </div>
                  <button class="btn btn-block btn-success" type="submit">
                    ایجاد حساب کاربری
                  </button>

                  {errors.email && <p>{errors.email.message}</p>} 
                  {errors.lastName && <p>{errors.lastName.message}</p>}
                  {errors.fristName && <p>{errors.fristName.message}</p>}
                  {errors.password && <p>{errors.password.message}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
