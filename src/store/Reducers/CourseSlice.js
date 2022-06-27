import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../Actions";

const CourseSlice = createSlice({
    name:'course',
    initialState:{
        courses:[],
        category:'',
    },
    reducers:{
        getCourse:(state,action) =>{
            state.courses = action.payload.data.data
        },
        getCategory:(state,action) => {
            state.category = action.payload
        }
    }
})

// Api Events
export const getCourseFunc = () => apiCall({
    url:'/user/category?page=1&limit=5',
    method:'get',
    onSuccess:CourseSlice.actions.getCourse.type
})

//Functions
export const getCategoryFunc = (e) => {
    return dispatch => {
        dispatch({
            type:CourseSlice.actions.getCategory.type,
            payload:e.target.value
        })
    }
}

export default CourseSlice.reducer