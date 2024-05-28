import {
  CForm,
  CCol,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CFormTextarea,
  CFormSelect,
  CButton,
} from "@coreui/react";
import { useState, useEffect } from "react";
const AddAdvertiseCO = () => {
  const [userName, setUserName] = useState(null);
  const [mes, setMes] = useState(null);

  const message = () => {
    try {
      fetch("https://farawin.iran.liara.run/api/chat", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
          "authorization":
            "JTdCJTIydXNlcm5hbWUlMjIlM0ElMjIwOTAwMDAwMDAwMCUyMiUyQyUyMnBhc3N3b3JkJTIyJTNBJTIyMTIzNDU2NzhBYSU0MCUyMiUyQyUyMm5hbWUlMjIlM0ElMjIlRDklODElRDglQjElRDglQTclRDklODglREIlOEMlRDklODYlMjIlMkMlMjJkYXRlJTIyJTNBJTIyMjAyMy0xMC0yNVQwNCUzQTIyJTNBNTYuODMzWiUyMiU3RA",
        },
        body: JSON.stringify({ contactUsername: userName, textHtml: mes }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    } catch {
      alert("error");
    }
  };
  const handlesend = () => {
    message();
  };
  return (
    <div className="p-3">
      <div className="row g-3">
        <CCol md={4}>
          <CFormInput
            type="number"
            id="validationServer01"
            label="نام کاربری"
            feedback="عنوان عالیه!"
            defaultValue=""
            required
            onInput={(e) => {
              setUserName(e.target.value);
            }}
          />
        </CCol>
        <CCol md={4}>
          <CFormInput
            disabled
            type="text"
            id="validationServer02"
            label="کارفرما"
            defaultValue=""
            required
          />
        </CCol>
        <CCol md={4}>
          <CFormInput
            type="text"
            id="validationServer02"
            label="سابقه کاری"
            defaultValue="مهم نیست"
            required
            disabled
          />
        </CCol>
        <CCol md={12}>
          <CFormInput
            type="text"
            id="validationServer03"
            label="آدرس"
            feedback="آدرس محل کار را وارد کنید."
            required
            disabled
          />
        </CCol>
        <CCol md={4}>
          <CFormSelect
            id="validationServer04"
            label="جنسیت"
            feedback="لطفا جنسیت را انتخاب کنید."
            disabled
          >
            <option>زن</option>
            <option>مرد</option>
          </CFormSelect>
        </CCol>
        <CCol md={4}>
          <CFormSelect
            id="validationServer04"
            label="مدرک تحصیلی"
            feedback="لطفا مدرک تحصیلی را انتخاب کنید."
            disabled
          >
            <option>دیپلم</option>
            <option>کاردانی</option>
            <option>کارشناسی</option>
            <option>کارشناسی ارشد</option>
            <option>مهم نیست</option>
          </CFormSelect>
        </CCol>
        <CCol md={4}>
          <CFormSelect
            id="validationServer04"
            label="سازمان"
            feedback=""
            disabled
          >
            <option>خصوصی</option>
            <option>دولتی</option>
          </CFormSelect>
        </CCol>
        <CCol>
          <CFormTextarea
            feedbackInvalid=""
            type="text"
            id="validationTextarea"
            label="جزئیات"
            placeholder="لطفا جزئیات درخواست خود را اینجا بنویسید"
            required
            onChange={(e) => setMes(e.target.value)}
          ></CFormTextarea>
        </CCol>
        <CCol xs={15}>
          <CButton color="primary"  onClick={handlesend} type="submit">
            افزودن اگهی
          </CButton>
        </CCol>
      </div>
    </div>
  );
};

export default AddAdvertiseCO;
