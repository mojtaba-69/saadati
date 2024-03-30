//کد های مربوط به کامبوننت اد یوزر در اینجا قرار دارد
// از فرم های ویلیدیشن کور یو ای استفاده کردم 
import {CInputGroup,CInputGroupText,CFormInput,CCol,CFormFeedback,CFormCheck,CFormSelect,CButton,CFormLabel,CForm} from '@coreui/react'
import { useState } from 'react'
//در اینجا مقادیر  فرم ولید میشود ک اگر اشتباه بقود به رنگ سبز در می ایند و اگر اشتباه بودند به رنگ قرمز در خواهند بود
const AddUserCO = () => {
  const [validated, setValidated] = useState(false)
const handleSubmit = (event) => {
  const form = event.currentTarget
  if (form.checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  }
  setValidated(true)
}
return (
  <div className='p-3 d-flex align-items-center'>
  <CForm
    className="row g-3 needs-validation"
    noValidate
    validated={validated}
    onSubmit={handleSubmit}
  >
    <CCol md={4}>
      <CFormInput
        type="text"
        feedbackValid="عالی!"
        id="validationCustom01"
        label="نام"
        required
      />
    </CCol>
    <CCol md={4}>
      <CFormInput
        type="text"
        feedbackValid="عالی!"
        id="validationCustom02"
        label="نام خانوادگی"
        required
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
        <option >کارفرما</option>
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
      />
    </CCol>
    <CCol xs={12}>
      <CFormCheck
        type="checkbox"
        id="invalidCheck"
        label="تمام قوانین را قبول دارم."
        required
      />
      <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
    </CCol>
    <CCol xs={12}>
      <CButton color="primary" type="submit">
        Submit form
      </CButton>
    </CCol>
  </CForm>
  </div>
)
};

export default AddUserCO;
