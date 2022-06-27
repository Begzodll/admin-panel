import {configureStore} from "@reduxjs/toolkit";

//Reducer

import library from './Reducers/LibrarySlice';
import course from './Reducers/CourseSlice';
import register from './Reducers/RegisterSlice';

//API
import thunk from "redux-thunk";
import api from './Middleware/apiMethod';
import apiReg from "./Middleware/ApiRegister";

// Events
export default configureStore({
    reducer:{
        course,
        library,
        register
    },
    middleware:[
        api,
        apiReg,
        thunk
    ]
})