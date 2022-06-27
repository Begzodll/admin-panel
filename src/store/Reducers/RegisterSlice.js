import {createSlice} from "@reduxjs/toolkit";
import {apiCallRegister} from "../Actions";

const RegisterSlice = createSlice({
    name:'register',
    initialState:{
        users:[],
        admin:[],
        userGoogle:null,
    // Sing Up User
        registerUserName:'',
        registerUserLName:'',
        registerUserEmail:'',
        registerUserPsw:'',

    // Sing In User
        singInEmail:'',
        singInPassword:'',

    // Sing Up Admin
        adminName:'',
        adminLastname:'',
        adminEmail:'',
        adminPassword:'',
    // Sing In
        adminSingInEmail:'',
        adminSingInPassword:''

    },
    reducers:{
    // PUGUD
        userGoogleState:(state,action)=>{
            state.userGoogle = action.payload
        },
        getUser:(state,action) =>{
            state.users = action.payload
        },
        getAdmin:(state,action) =>{
            state.admin = action.payload
        },
        postUser:(state,action) =>{
            state.users.push(action.payload)
        },
        postAdmin:(state,action) => {
            state.admin.push(action.payload)
        },
    // Sing UP
        getUserName:(state,action) =>{
            state.registerUserName = action.payload
        },
        getUserLName:(state,action) =>{
            state.registerUserLName = action.payload
        },
        getUserEmail:(state,action) =>{
            state.registerUserEmail = action.payload
        },
        getUserPassword:(state,action) =>{
            state.registerUserPsw = action.payload
        },
    // Sing In
        getValueSingInEmail:(state,action) => {
            state.singInEmail = action.payload
        },
        getValueSingInPassword:(state,action) => {
            state.singInPassword = action.payload
        },
    // Sing Up Admin
        getAdminName:(state,action) => {
            state.adminName = action.payload
        },
        getAdminLastName:(state,action)=>{
            state.adminLastname = action.payload
        },
        getAdminEmail:(state,action)=>{
            state.adminEmail = action.payload
        },
        getAdminPassword:(state,action)=>{
            state.adminPassword = action.payload
        },
    // Sing In Admin
        getAdminSingInEmail:(state,action)=>{
            state.adminSingInEmail = action.payload
        },
        getAdminSingInPassword:(state,action)=>{
            state.adminSingInPassword = action.payload
        }
    }
})

// Api Events
export const getUserFunc = () => apiCallRegister({
    url:'/user',
    method:'GET',
    onSuccess:RegisterSlice.actions.getUser.type
})
export const getAdminFunc = () => apiCallRegister({
    url:'/admin',
    method:'GET',
    onSuccess:RegisterSlice.actions.getAdmin.type
})
export const PostUserFunc = (data) => apiCallRegister({
    url:'/user',
    method:'POST',
    data,
    onSuccess:RegisterSlice.actions.postUser.type
})
export const PostAdminFunc = (data) => apiCallRegister({
    url:'/admin',
    method:'POST',
    data,
    onSuccess:RegisterSlice.actions.postAdmin.type
})

// Functions

// Sing Up User
export const getValueRegUserName = (e) => {
   return dispatch => {
       dispatch({
           type:RegisterSlice.actions.getUserName.type,
           payload:e.target.value
       })
   }
}
export const getGoogleUser = (item) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.userGoogleState.type,
            payload:item
        })
    }
}

export const getValueRegUserLastName = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.getUserLName.type,
            payload:e.target.value
        })
    }
}
export const getValueRegUserEmail = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.getUserEmail.type,
            payload:e.target.value
        })
    }
}
export const getValueRegUserPsw = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.getUserPassword.type,
            payload:e.target.value
        })
    }
}

// Sing In User

export const getValueSingInEmailFunc = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.getValueSingInEmail.type,
            payload:e.target.value
        })
    }
}

export const getValueSingInPasswordFunc = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.getValueSingInPassword.type,
            payload:e.target.value
        })
    }
}

// Sing Up Admin
export const adminGetValueName = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.getAdminName.type,
            payload:e.target.value
        })
    }
}
export const adminGetValueLastName = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.getAdminLastName.type,
            payload:e.target.value
        })
    }
}
export const adminGetValueEmail = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.getAdminEmail.type,
            payload:e.target.value
        })
    }
}
export const adminGetValuePassword = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.getAdminPassword.type,
            payload:e.target.value
        })
    }
}
// Sing In Admin
export const getAdminSingInEmailFunc = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.getAdminSingInEmail.type,
            payload:e.target.value
        })
    }
}
export const getAdminSingInPasswordFunc = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.getAdminSingInPassword.type,
            payload:e.target.value
        })
    }
}
export default RegisterSlice.reducer