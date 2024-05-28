//کد های مربوط به کامبوننت اد یوزر در اینجا قرار دارد
// از فرم های ویلیدیشن کور یو ای استفاده کردم
import {
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CCol,
  CFormFeedback,
  CFormCheck,
  CFormSelect,
  CButton,
  CFormLabel,
  CForm,
} from "@coreui/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useDispatch } from "react-redux";
// import { setEmail, setName, setPhone, setUserName } from "../../redux/Store";
// import {  useSelector } from "react-redux";
//در اینجا مقادیر  فرم ولید میشود ک اگر اشتباه بقود به رنگ سبز در می ایند و اگر اشتباه بودند به رنگ قرمز در خواهند بود
const AddUserCO = () => {
  const [validated, setValidated] = useState(true);
  const [name, setname] = useState(null);
  const [userName, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const schema = yup.object().shape({
    name: yup.string().min(3).required(),
    username: yup.number().min(10).positive().required(),
    password: yup.string().min(8).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const upLoadUser =() => {
    try {
       fetch("https://farawin.iran.liara.run/api/user", {
        method: "post",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          name: name,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
      if ("code" === 200) {
        console.log("کاربر با موفقیت ثبت نام شد");
      }
    } catch {
      alert("error");
    }
  };

  useEffect(() => {
    upLoadUser();
    return console.log("a");
  }, []);
  const onFormSubmit = (data) => {
    upLoadUser();
    console.log(data);
  };
  return (
    <div className="p-3 d-flex flex-column align-items-center">
      <h2 className="mb-5">فرم افزودن کاربر</h2>
      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <CCol md={4}>
          <CFormInput
            type="text"
            feedbackValid="عالی!"
            id="validationCustom01"
            label="نام (باید 3 حرف بیشتر باشد)"
            required
            {...register("name")}
            onInput={(e) => setname(e.target.value)}
          />
        </CCol>
        <CCol md={4}>
          <CFormInput
            type="password"
            feedbackValid="عالی!"
            id="validationCustom02"
            label="پسورد (باید بیشتر از 8 کاراکتر باشد) "
            required
            onInput={(e) => setPassword(e.target.value)}
            {...register("password")}
          />
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustomUsername">
            نام کاربری (باید شماره تلفن باشد)
          </CFormLabel>
          <CInputGroup className="has-validation">
            <CFormInput
              type="number"
              aria-describedby="inputGroupPrependFeedback"
              feedbackValid="یک نامکاربری برای خود انتخاب کنید."
              id="validationCustomUsername"
              required
              {...register("username")}
              onInput={(e) => {
                setUsername(e.target.value);
              }}
            />
          </CInputGroup>
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="email"
            aria-describedby="validationCustom03Feedback"
            feedbackInvalid="لطفا ایمیل را وارد نمایید."
            id="validationCustom03"
            label="ایمل"
            required
            disabled
            // onInput={(e) => {
            //   setEmaill(e.target.value);
            // }}
          />
        </CCol>
        <CCol md={3}>
          <CFormSelect
            aria-describedby="validationCustom04Feedback"
            feedbackInvalid="لطفا نقش کاربر را انتخاب کنید"
            id="validationCustom04"
            label="نقش"
            required
            disabled
          >
            <option>کارفرما</option>
            <option>کارجو</option>
          </CFormSelect>
        </CCol>
        <CCol md={3}>
          <CFormInput
            disabled
            type="number"
            aria-describedby="validationCustom05Feedback"
            feedbackInvalid="لطفا شماره تمارس را وارد کنید."
            id="validationCustom05"
            label="تلفن"
            required
            // onInput={(e) => {
            // setPhonee(e.target.value);
            // }}
          />
        </CCol>
        <CCol xs={12}>
          <CFormCheck
            type="checkbox"
            id="invalidCheck"
            label="تمام قوانین را قبول دارم."
            required
            disabled
          />
          <CFormFeedback invalid>
            You must agree before submitting.
          </CFormFeedback>
        </CCol>
        <CCol xs={12}>
          <CButton color="primary" type="submit">
            Submit form
          </CButton>
        </CCol>
      </CForm>

    </div>
  );
};

export default AddUserCO;
