import React from 'react'
import Header from '../ui/component/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../ui/component/footer/Footer'
import Home from '../ui/pages/Home/Home'
import Login from '../ui/pages/Login/Login'
import Signup from '../ui/pages/Signup/Signup'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}
