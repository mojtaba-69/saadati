import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";




const Register = () => {
const [name, setName] = useState(null);
const [password, setPassword] = useState(null);
const [username, setUsername] = useState(null);
const navigate = useNavigate();

const schema = yup.object().shape({
  username: yup.number().min(10).positive().required(),
  name: yup.string().min(4).required(),
  password: yup.string().min(6).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password")]).required(),
});

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({ resolver: yupResolver(schema) });

const upLoadUser = async () => {
  try {
    await fetch("https://farawin.iran.liara.run/api/user", {
      headers: {
        "accept": "application/json",
        "content-type":"application/json"
      },
      'body': JSON.stringify({ username: username, name: name, password: password }),
      method: "post",
    }).then((res)=>res.json()).then((json)=>console.log(json));
  } catch {
    alert("error")
  }
};

useEffect(()=>{
  upLoadUser();
  return console.log("a")
},[onFormSubmit])

const onFormSubmit = (data) => {
  upLoadUser();
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
                <h1>Register</h1>
                <p class="text-medium-emphasis">Create your account</p>
                <div class="input-group mb-3">
                  <span class="input-group-text">
                    <svg class="icon"></svg>
                  </span>
                  <input
                    onInput={(e) => setUsername(e.target.value)}
                    class="form-control"
                    type="text"
                    placeholder="Username"
                    {...register("username")}
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text">
                    <svg class="icon"></svg>
                  </span>
                  <input
                  onInput={(e) => setName(e.target.value)}
                    class="form-control"
                    type="text"
                    placeholder="Name"
                    {...register("name")}
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
                    placeholder="Password"
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
                    placeholder="Repeat password"
                    {...register("confirmPassword")}
                  />
                </div>
                <button class="btn btn-block btn-success" type="submit">
                  Create Account
                </button>
                      
                      {errors.username && <p>{errors.username.message}</p>}
                      {errors.name && <p>{errors.name.message}</p>}
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
