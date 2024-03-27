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
    initialState: {active :true},
    reducers : {
        menuActive : (state,action) => {
            state.active = true
        },
        menuDeActive : (state)=>{
                state.active = false
            }
        }
    })
    export const {menuActive,menuDeActive} = activeSlice.actions
    export const {login,logout} = userSlice.actions
    export const store = configureStore({reducer :{
        user : userSlice.reducer,
        activeSideBar: activeSlice.reducer
    }})