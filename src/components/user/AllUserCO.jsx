//در اینجا کد های مربوط به کامبونت  نمایش تمام کاربران قرار دارد
import { CTable } from "@coreui/react"
import usersData from "../../data/UserData"
const AllUserCO = ()=>{
//در اینجا مقادیری ک قرار است در ها ستون نمایش داده شود را ست کردم
    const columns = [
        {
          key: 'id',
          label: '#',
          _props: { scope: 'col' },
        },{
            key: 'نام',
            _style: { width: '20%' },
          },
          {
            key: 'نام_کاربری',
            _style: { width: '20%' },
            
          },
          'فعالسازی',
          {
            key: 'نقش',
            _style: { width: '10%' }
          },
          {
            key: 'ایمیل',
            _style: { with:'20%'}
          },
      ]
    
    const items = usersData
      return (
        <div className="p-1">
{/* //در اینجا کامبوننت  تیبل کوریوای ساده استفاده کردم ک مقادیر ستون از بالا و دیتا از یوزر دیتا دریافت میشود */}
            <CTable  hover striped  columns={columns} items={items} />
        </div>
      )
  
}

export default AllUserCO
