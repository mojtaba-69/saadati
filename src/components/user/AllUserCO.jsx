//در اینجا کد های مربوط به کامبونت  نمایش تمام کاربران قرار دارد
import { CTable } from "@coreui/react";
import usersData from "../../data/UserData";
import { getValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useEffect, useState } from "react";
const AllUserCO = () => {

  const [userList,setUserList]=useState(null)
  //در اینجا مقادیری ک قرار است در ها ستون نمایش داده شود را ست کردم
  const columns = [
    {
      key: "id",
      label: "#",
      _props: { scope: "col" },
    },
    {
      key: "name",
      _style: { width: "20%" },
    },
    {
      key: "username",
      _style: { width: "20%" },
    },
    {  key: "register",
    _style: { width: "20%" }
     },
    {
      key: "role",
      _style: { width: "10%" },
    },
    {
      key: "email",
      _style: { with: "20%" },
    },
  ];
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
  const items = userList;
  return (
    <div className="p-1">
      {/* //در اینجا کامبوننت  تیبل کوریوای ساده استفاده کردم ک مقادیر ستون از بالا و دیتا از یوزر دیتا دریافت میشود */}
      <CTable hover striped columns={columns} items={items} />
    </div>
  );
};

export default AllUserCO;
