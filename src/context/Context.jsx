import {createContext, useContext, useState } from "react";

export const MenuVisibleContex = createContext({
    visible: true,
    setVisible: () => { }
})

export const MenuVisibleContexProvider = ({ children }) => {
    const [visible, setVisible] = useState(false)
   
    return (
        <MenuVisibleContexProvider value={[visible, setVisible]}>
            {children}
        </MenuVisibleContexProvider>
    )
}
export const useStateContext = ()=>{useContext(MenuVisibleContex)};