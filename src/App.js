import React, {useEffect, useState} from 'react'
import {Routes, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';


//Components
import Library from './Pages/Library/Library';
import MoreCourse from "./Components/MoreCourse";
import Course from "./Pages/Course/Course";
import Home from "./Pages/Home/Home";
import MainLayout from "./Layout/MainLayout";
import MoreBook from "./Components/MoreBook";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register/Register";
import Admin from "./Pages/Admin/Admin";
import axios from "axios";

function App() {
    return (
        <>
            <Navbar/>
            <ToastContainer/>
            <Routes>
                <Route index element={<Register/>}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/admin'} element={<Admin/>}/>
                <Route path={'/library/:id'} element={<MoreBook/>}/>
                <Route path={'/library'} element={<Library/>}/>
                <Route path={'/courses/:id'} element={<MoreCourse/>}/>
                <Route path={'/courses'} element={<Course/>}/>
            </Routes>
        </>
    )
}

export default App

