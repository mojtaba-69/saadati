import{configureStore, createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name : "user",
    initialState : {username : ""},
    reducers : {
        login : (state,action) => {
            state.username = action.payload.username
        } ,
        logout : (state)=>{
            state.username = ""
        }
    }
})


const activeSlice =createSlice({
    name: "activeSideBar",
    initialState: {active : 1},
    reducers : {
        menuActive : (state) => {
            state.active = 1
        },
        menuDeActive : (state)=>{
                state.active = 0
            }
        }
    })
    export const {menuActive,menuDeActive} = activeSlice.actions
    export const {login,logout} = userSlice.actions
    export const store = configureStore({reducer :{
        user : userSlice.reducer,
        activeSideBar: activeSlice.reducer
    }})