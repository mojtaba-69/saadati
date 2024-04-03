import { useState } from "react"
import { CSmartTable } from "@coreui/react-pro"
import { CButton,CCollapse,CCardBody,CAvatar,CBadge,getBadge } from "@coreui/react"
import avatarr from "../../assets/avatar/avatar.png"

import AdvertiseData from '../../data/AdvertiseData'
const AllAdvertiseCO = ()=>{
    const [details, setDetails] = useState([])

    const columns = [
            {
                key:"id"
            },
            {
                key: "عنوان"
            },  {
                key: "سازمان"
            },  {
                key: "موقعیت_مکانی"
            },  {
                key: "حقوق"
            },  {
                key: "کارفرما"
            },  {
                key: "سابقه"
            },  {
                key: "جنسیت"
            },  {
                key: "حداقل_مدرک_تحصیلی"
            },  {
                key: "فعالسازی"
            },  {
                key: 'show_details',
                label: 'جزئیات',
                _style: { width: '1%' },
                filter: false,
                sorter: false,
              },

    ]
    // const items = AdvertiseData 
    
    const toggleDetails = (index) => {
        const position = details.indexOf(index)
        let newDetails = details.slice()
        if (position !== -1) {
          newDetails.splice(position, 1)
        } else {
          newDetails = [...details, index]
        }
        setDetails(newDetails)
      }

    return(
        <CSmartTable
        columns={columns}
        items={AdvertiseData}
        
          clickableRows
        scopedColumns={{
            avatar: (item) => (
                <td>
                  <CAvatar src={avatarr} />
                </td>
              ),
             
        show_details: (item) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    toggleDetails(item.id)
                  }}
                >
                  {details.includes(item.id) ? 'پنهان' : 'نمایش'}
                </CButton>
              </td>
            )
          }
          ,
          details: (item) => {
            return (
              <CCollapse visible={details.includes(item.id)}>
                <CCardBody className="p-3">
                  <h4>{item.username}</h4>
                  <p className="text-muted">    {item.دیسکریپشن}</p>
                  <CButton size="sm" color="info">
                    تنظیمات کاربر
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1">
                    حذف
                  </CButton>
                </CCardBody>
              </CCollapse>
            )
          }}}
        />
    )    
}

export default AllAdvertiseCO