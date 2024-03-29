import { CSmartTable } from '@coreui/react-pro'
import { useState } from 'react';
import { CAvatar,CBadge, CButton ,CCollapse,CCardBody } from '@coreui/react'
import avatarr from "../assets/avatar/avatar.png"
import usersData from './UserData';

const UserManagement = () =>{
    const [details, setDetails] = useState([])
    const columns = [
      {
        key: 'avatar',
        label: '',
        filter: false,
        sorter: false,
      },
      {
        key: 'نام',
        _style: { width: '20%' },
      },
      'فعالسازی',
      {
        key: 'نقش',
        _style: { width: '20%' }
      },
      {
        key: 'وضعیت',
        _style: { width: '20%' }
      },
      {
        key: 'show_details',
        label: '',
        _style: { width: '1%' },
        filter: false,
        sorter: false,
      },
    ]
   
    const getBadge = (status) => {
      switch (status) {
        case 'فعال':
          return 'success'
        case 'غیر فعال':
          return 'secondary'
        case 'در انتظار':
          return 'warning'
        case 'بسته شده':
          return 'danger'
        default:
          return 'primary'
      }
    }
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
    return (
      <div className='p-2'>
        <div className='d-flex flex-column p-1'>
  
        
        <CSmartTable
          className='p-1'
          activePage={2}
          cleaner
          clickableRows
          columns={columns}
          columnFilter
          columnSorter
          footer
          items={usersData}
          itemsPerPageSelect
          itemsPerPage={5}
          pagination
          onFilteredItemsChange={(items) => {
            console.log(items)
          }}
          onSelectedItemsChange={(items) => {
            console.log(items)
          }}
          scopedColumns={{
            avatar: (item) => (
              <td>
                <CAvatar src={avatarr} />
              </td>
            ),
            status: (item) => (
              <td>
                <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
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
                    {details.includes(item.id) ? 'Hide' : 'Show'}
                  </CButton>
                </td>
              )
            },
            details: (item) => {
              return (
                <CCollapse visible={details.includes(item.id)}>
                  <CCardBody className="p-3">
                    <h4>{item.username}</h4>
                    <p className="text-muted">تاریخ ایجاد حساب : {item.registered}</p>
                    <CButton size="sm" color="info">
                      تنظیمات کاربر
                    </CButton>
                    <CButton size="sm" color="danger" className="ml-1">
                      حذف
                    </CButton>
                  </CCardBody>
                </CCollapse>
              )
            },
          }}
          selectable
          sorterValue={{ column: 'status', state: 'asc' }}
          tableFilter
          tableProps={{
            className: 'add-this-class',
            responsive: true,
            striped: true,
            hover: true,
          }}
          tableBodyProps={{
            className: 'align-middle'
          }}
        />
      </div>
      </div>
      
    );
}

export default UserManagement