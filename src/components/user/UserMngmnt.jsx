import { CSmartTable } from "@coreui/react-pro";
import { useState, useEffect } from "react";
import { CAvatar, CBadge, CButton, CCollapse, CCardBody } from "@coreui/react";
import avatarr from "../../assets/avatar/avatar.png";
// import usersData from "../../data/UserData";

const status = {
  active: "فعال",
  disable: "غیرفعال",
  pending:"در انتظار",
  closed:"بسته شده"
};

const UserManagement = () => {
  const [details, setDetails] = useState([]);
  const [userList,setUserList]=useState(null)

  const loadUsers = async () =>{
    try{
      const response = await fetch("https://farawin.iran.liara.run/api/user");
      const json = await response.json();
      if(json.code === '200'){
        const users = json.userList.map((user,index) => {
          return {
                id: index + 1,
                name: user.name,
                username: user.username,
                register: new Date(user.date).toLocaleDateString("fa"),
                role: "khali",
                status: "active",
                email:"khali",
          }
        });
        setUserList(users);
      }
    }catch{
      alert('error')
    }
  }
  useEffect(()=>{
    loadUsers();
  },[])
  //اطلاعات مربو به هر ستون
  const columns = [
    {
      key: "avatar",
      label: "",
      filter: false,
      sorter: false,
    },
    {
      key: "name",
      _style: { width: "20%" },
    },
    "register",
    {
      key: "role",
      _style: { width: "20%" },
    },
    {
      key: "status",
      _style: { width: "20%" },
    },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      filter: false,
      sorter: false,
    },
  ];
  
  //وضعیت کاربران
  //فعال=>سبز
  //غیرفعال=>قرمز
  //در انتظار=>زرد
  //بسته شده=>قرمز
  const getBadge = (status) => {
    switch (status) {
      case "active":
        return "success";
      case "disable":
        return "secondary";
      case "pending":
        return "warning";
      case "closed":
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
      activePage={1}
      cleaner
      clickableRows
      columns={columns}
      columnFilter
      columnSorter
      footer
      items={userList}
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
            <CBadge color={getBadge(item.status)}>{status[item.status]}</CBadge>
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
                {details.includes(item.id) ? "پنهان" : "نمایش"}
              </CButton>
            </td>
          );
        },
        details: (item) => {
          return (
            <CCollapse visible={details.includes(item.id)}>
              <CCardBody className="p-3">
                <h4>{item.username}</h4>
                <p className="text-muted">تاریخ ایجاد حساب : {item.register}</p>
                <CButton size="sm" color="info">
                  تنظیمات کاربر
                </CButton>
                <CButton size="sm" color="danger" className="ml-1">
                  حذف
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

export default UserManagement;
