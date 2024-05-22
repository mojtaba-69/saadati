import { useState } from "react";
import { CSmartTable } from "@coreui/react-pro";
import { CBadge, CButton, CCollapse, CCardBody } from "@coreui/react";

const AdvertiseCategoryCO = () => {
    const [details, setDetails] = useState([])
    const columns = [
   
      {
        key: 'عنوان_اگهی',
        _style: { width: '20%' },
      },
      {key:'تاریخ_انتشار',
      _style: { width:'20%'}
    },
      { 
        key: 'status',
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
    const usersData = [
      {
        id: 1,
        عنوان_اگهی: 'Samppa Nori',
        avatar: '1.jpg',
        تاریخ_انتشار: '2022/01/01',
     
        status: 'Active',
      },
      {
        id: 2,
        عنوان_اگهی: 'Estavan Lykos',
        avatar: '2.jpg',
        تاریخ_انتشار: '2022/02/07',
        status: 'Banned',
      },
      {
        id: 3,
        عنوان_اگهی: 'Chetan Mohamed',
        avatar: '3.jpg',
        تاریخ_انتشار: '2022/02/07',
        status: 'Inactive',
        _selected: true,
      },
      {
        id: 4,
        عنوان_اگهی: 'Derick Maximinus',
        avatar: '4.jpg',
        تاریخ_انتشار: '2022/03/19',
        status: 'Pending',
      },
      {
        id: 5,
        عنوان_اگهی: 'Friderik Dávid',
        avatar: '5.jpg',
        تاریخ_انتشار: '2022/01/21',
        status: 'Active'
      },
      { 
        id: 6,
        عنوان_اگهی: 'Yiorgos Avraamu',
        avatar: '6.jpg',
        تاریخ_انتشار: '2022/01/01',
        status: 'Active'
      },
      {
        id: 7,
        عنوان_اگهی: 'Avram Tarasios',
        avatar: '7.jpg',
        تاریخ_انتشار: '2022/02/07',
        status: 'Banned',
        _selected: true,
      },
      {
        id: 8,
        عنوان_اگهی: 'Quintin Ed',
        avatar: '8.jpg',
        تاریخ_انتشار: '2022/02/07',
        status: 'Inactive'
      },
      { 
        id: 9,
        عنوان_اگهی: 'Enéas Kwadwo',
        avatar: '9.jpg',
        تاریخ_انتشار: '2022/03/19',
        status: 'Pending'
      },
      { 
        id: 10,
        عنوان_اگهی: 'Agapetus Tadeáš',
        avatar: '10.jpg',
        تاریخ_انتشار: '2022/01/21',
        status: 'Active'
      },
      { 
        id: 11,
        عنوان_اگهی: 'Carwyn Fachtna',
        avatar: '11.jpg',
        تاریخ_انتشار: '2022/01/01',
        status: 'Active'
      },
      {
        id: 12,
        عنوان_اگهی: 'Nehemiah Tatius',
        avatar: '12.jpg',
        تاریخ_انتشار: '2022/02/07',
        status: 'Banned',
        _selected: true,
      },
      {
        id: 13,
        عنوان_اگهی: 'Ebbe Gemariah',
        avatar: '13.jpg',
        تاریخ_انتشار: '2022/02/07',
        status: 'Inactive'
      },
      {
        id: 14,
        عنوان_اگهی: 'Eustorgios Amulius',
        avatar: '14.jpg',
        تاریخ_انتشار: '2022/03/19',
        status: 'Pending',
      },
      {
        id: 15,
        عنوان_اگهی: 'Leopold Gáspár',
        avatar: '15.jpg',
        تاریخ_انتشار: '2022/01/21',
        status: 'Active'
      },
    ]
    const getBadge = (status) => {
      switch (status) {
        case 'Active':
          return 'success'
        case 'Inactive':
          return 'secondary'
        case 'Pending':
          return 'warning'
        case 'Banned':
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
      <CSmartTable
        activePage={1}
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
      
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
            </td>
          ),
          show_details: (item) => {
            return (
              <td classعنوان_اگهی="py-2">
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
                <CCardBody classعنوان_اگهی="p-3">
                  <h4>{item.userعنوان_اگهی}</h4>
                  <p classعنوان_اگهی="text-muted">User since: {item.تاریخ_انتشار}</p>
                  <CButton size="sm" color="info">
                    User Settings
                  </CButton>
                  <CButton size="sm" color="danger" classعنوان_اگهی="ml-1">
                    Delete
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
    
    );
};

export default AdvertiseCategoryCO;
