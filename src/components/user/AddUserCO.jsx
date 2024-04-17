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
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { setEmail, setName, setPhone, setUserName } from "../../redux/Store";
import {  useSelector } from "react-redux";
//در اینجا مقادیر  فرم ولید میشود ک اگر اشتباه بقود به رنگ سبز در می ایند و اگر اشتباه بودند به رنگ قرمز در خواهند بود
const AddUserCO = () => {
  const [validated, setValidated] = useState(true);
  const [name, setname] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmaill] = useState("");
  const [phone, setPhonee] = useState(0);
  const dispatch = useDispatch();
  const s = useSelector((state)=> state.addUser)
  const schema = yup.object().shape({
    name: yup.string().required(),
    username: yup.string().min(6).max(12).required(),
    email: yup.string().email().required(),
    phone: yup.number().min(10).max(10).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onFormSubmit = (data) => {
    dispatch(setName({ name: name }));
    dispatch(setEmail({ email: email }));
    dispatch(setUserName({ username: userName }));
    dispatch(setPhone({ phone: phone }));
    console.log(s)
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
            label="نام و نام خانوادگی"
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
            label="پسورد"
            required
            {...register("password")}
          />
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustomUsername">نام کاربری</CFormLabel>
          <CInputGroup className="has-validation">
            <CInputGroupText>@</CInputGroupText>
            <CFormInput
              type="text"
              aria-describedby="inputGroupPrependFeedback"
              feedbackValid="یک نامکاربری برای خود انتخاب کنید."
              id="validationCustomUsername"
              required
              {...register("username")}
              onInput={(e) => {
                setUsername("@", e.target.value);
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
            {...register("email")}
            onInput={(e) => {
              setEmaill(e.target.value);
            }}
          />
        </CCol>
        <CCol md={3}>
          <CFormSelect
            aria-describedby="validationCustom04Feedback"
            feedbackInvalid="لطفا نقش کاربر را انتخاب کنید"
            id="validationCustom04"
            label="نقش"
            required
          >
            <option>کارفرما</option>
            <option>کارجو</option>
          </CFormSelect>
        </CCol>
        <CCol md={3}>
          <CFormInput
            type="number"
            aria-describedby="validationCustom05Feedback"
            feedbackInvalid="لطفا شماره تمارس را وارد کنید."
            id="validationCustom05"
            label="تلفن"
            required
            {...register("numberphone")}
            onInput={(e) => {
              setPhonee(e.target.value);
            }}
          />
        </CCol>
        <CCol xs={12}>
          <CFormCheck
            type="checkbox"
            id="invalidCheck"
            label="تمام قوانین را قبول دارم."
            required
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
      {errors.email ||
        errors.username ||
        errors.password ||
        errors.name ||
        (errors.numberphone && (
          <div>
            <p>{errors.name.message}</p>
            <p>{errors.username.message}</p>
            <p>{errors.password.message}</p>
            <p>{errors.email.message}</p>
            <p> {errors.numberphone.message}</p>
          </div>
        ))}
    </div>
  );
};

export default AddUserCO;
