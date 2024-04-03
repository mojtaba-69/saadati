import AdvertiseData from "../../data/AdvertiseData";
import { CSmartTable } from "@coreui/react-pro";
import { CAvatar, CBadge, CButton, CCollapse, CCardBody } from "@coreui/react";
import { useState } from "react";
import avatarr from "../../assets/avatar/avatar.png"

const Advertise = () => {
  const [details, setDetails] = useState([]);
  const data = AdvertiseData;
  const columns = [
    {
      key: "avatar",
      label: "",
      filter: false,
      sorter: false,
    },
    {
      key: "عنوان",
      _style: { width: "14%" },
    },
    { key: "فعالسازی",
      _style: { width: '13%'}
    },
    {
      key: "سابقه",
      _style: { width: '9%' }
    },
    {
      key: "کارفرما",
      _style: { width: "13%" },
    },
    {
      key: "موقعیت_مکانی",
      _style: { width: "16%" },
    },
   
    {
      key: "حقوق",
      _style: { width: "10%" },
    },
    {
      key: "جنسیت",
      _style: { width: "9%" },
    },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      filter: false,
      sorter: false,
    },
  ];
  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
        case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };
  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };
  return (
    <CSmartTable
    
      activePage={2}
      cleaner
      clickableRows
      columns={columns}
      columnFilter
      columnSorter
      footer
      items={data}
      itemsPerPageSelect
      itemsPerPage={5}
      pagination
      onFilteredItemsChange={(items) => {
        console.log(items);
      }}
      onSelectedItemsChange={(items) => {
        console.log(items);
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
                  toggleDetails(item.id);
                }}
              >
                {details.includes(item.id) ? "Hide" : "Show"}
              </CButton>
            </td>
          );
        },
        details: (item) => {
          return (
            <CCollapse visible={details.includes(item.id)}>
              <CCardBody className="p-3">
                <h4>{item.username}</h4>
                <p className="text-muted">User since: {item.registered}</p>
                <CButton size="sm" color="info">
                  User Settings
                </CButton>
                <CButton size="sm" color="danger" className="ml-1">
                  Delete
                </CButton>
              </CCardBody>
            </CCollapse>
          );
        },
      }}
      selectable
      sorterValue={{ column: "status", state: "asc" }}
      tableFilter
      tableProps={{
        className: "add-this-class",
        responsive: true,
        striped: true,
        hover: true,
      }}
      tableBodyProps={{
        className: "align-middle",
      }}
    />
  );
};
export default Advertise;
