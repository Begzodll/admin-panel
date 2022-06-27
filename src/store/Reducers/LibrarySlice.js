import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../Actions";

const LibrarySlice = createSlice({
    name:'library',
    initialState:{
        books:[],
    },
    reducers:{
        getBooks:(state,action) =>{
            state.books = action.payload.data.data
        }
    }
})

// Api Events
export const getBooksFunc = () => apiCall({
    url:'/user/book?page=1&limit=5',
    method:'get',
    onSuccess:LibrarySlice.actions.getBooks.type
})

export default LibrarySlice.reducer