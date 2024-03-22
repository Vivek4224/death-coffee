import React from 'react'
import Header from '../ui/component/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../ui/component/footer/Footer'
import Home from '../ui/pages/Home/Home'
import Login from '../ui/pages/Login/Login'
import Signup from '../ui/pages/Signup/Signup'
import Error404 from '../ui/pages/Error404/Error404'
import { Provider } from 'react-redux'
import store from '../redux/app/store'
import Dashboard from '../ui/pages/dashboard/Dashboard'
import Profile from '../ui/pages/profile/Profile'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />

                        { /*--------- common -----------*/}
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/profile' element={<ProtectedRoute Component={<Profile />} />}  />

                        { /*--------- admin -----------*/}
                        <Route path='/dashboard' element={<Dashboard/>}/>

                        { /*--------- error -----------*/}
                        <Route path='*' element={<Error404 />} />
                    </Routes>
                    <Footer />
                </Provider>
            </BrowserRouter>
        </>
    )
}
