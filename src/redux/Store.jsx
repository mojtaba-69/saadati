import{configureStore, createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name : "user",
    initialState : {username : localStorage.username},
    reducers : {
        login : (state,action) => {
            state.username = action.payload.username 
            localStorage.setItem('username',action.payload.username) 
        } ,
        logout : (state)=>{
            state.username = ""
        }
    }
});



const activeSlice =createSlice({
    name: "activeSideBar",
    initialState: {active : true},
    reducers : {
        menuActive : (state) => {
            state.active = true
        },
        menuDeActive : (state)=>{
                state.active = false
            }
        }
    });

const adduserSlice = createSlice({
    name:"addUser",
    initialState:{
        name:"",
        username:"",
        email:"",
        phone:"",
    },
    reducers:{
        setName:(state,action)=>{
            state.name = action.payload.name
        },
        setUserName: (state,action)=>{
            state.username = action.payload.username
        },
        setEmail: (state,action)=>{
            state.email = action.payload.email
        },
        setPhone: (state,action)=>{
            state.phone = action.payload.phone
        }
    }
});
    export const {setEmail,setName,setPhone,setUserName} = adduserSlice.actions;
    export const {menuActive,menuDeActive} = activeSlice.actions;
    export const {login,logout} = userSlice.actions;
    export const store = configureStore({reducer :{
        user : userSlice.reducer,
        activeSideBar: activeSlice.reducer,
        addUser : adduserSlice.reducer
    }});