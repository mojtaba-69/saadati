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

const AddAdvertiseCO = () => {
  return (
    <div className="p-3">

    <CForm className="row g-3">
      <CCol md={4}>
        <CFormInput
          type="text"
          id="validationServer01"
          label="عنوان"
          feedback="عنوان عالیه!"
          defaultValue=""
          valid
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          id="validationServer02"
          label="کارفرما"
          defaultValue=""
          valid
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          id="validationServer02"
          label="سابقه کاری"
          defaultValue="مهم نیست"
          valid
          required
        />
      </CCol>
      <CCol md={12}>
        <CFormInput
          type="text"
          id="validationServer03"
          label="آدرس"
          feedback="آدرس محل کار را وارد کنید."
          invalid
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormSelect
          id="validationServer04"
          label="جنسیت"
          feedback="لطفا جنسیت را انتخاب کنید."
          invalid
        >
          <option >زن</option>
          <option>مرد</option>
        </CFormSelect>
      </CCol>
      <CCol md={4}>
        <CFormSelect
          id="validationServer04"
          label="مدرک تحصیلی"
          feedback="لطفا مدرک تحصیلی را انتخاب کنید."
          invalid
        >
          <option >دیپلم</option>
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
          invalid
        >
          <option >خصوصی</option>
          <option>دولتی</option>
       

        </CFormSelect>
      </CCol>
      <CCol>
        
      <CFormTextarea
      feedbackInvalid=""
      id="validationTextarea"
      label="جزئیات"
      placeholder="لطفا جزئیات درخواست خود را اینجا بنویسید"
      required
    ></CFormTextarea>
      </CCol>
      <CCol xs={15}>
        <CButton color="primary" type="submit">
        افزودن اگهی
        </CButton>
      </CCol>
    </CForm>
    </div>
  );
};

export default AddAdvertiseCO;
