import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Screens/Public/Home";

import AdminDashboard from "../Screens/Dashboards/AdminDashboard/AdminDashboard";

export const Router = () => {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
        <Route path='/*' element={<Home/>}></Route>
        <Route path='admin/*' element={<AdminDashboard/>}></Route>

    </Routes>

    </BrowserRouter>

    </>
  )
}
