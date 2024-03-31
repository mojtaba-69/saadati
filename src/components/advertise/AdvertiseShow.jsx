import AdvertiseData from "../../data/AdvertiseData"
import {CCard,CCardImage,CCardBody,CCardText,CCardTitle,CCardLink,CListGroup,CListGroupItem} from "@coreui/react"
import pic1 from "../../assets/pic/pic1.png"
const Advertise =()=>{
<div>
<CCard style={{ width: '18rem' }}>
  <CCardImage orientation="top"
//    src={pic1} 
   />
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CCardText>
  </CCardBody>
  <CListGroup flush>
    <CListGroupItem>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Vestibulum at eros</CListGroupItem>
  </CListGroup>
  <CCardBody>
    <CCardLink href="#">Card link</CCardLink>
    <CCardLink href="#">Another link</CCardLink>
  </CCardBody>
</CCard>
</div>
}
export default Advertise