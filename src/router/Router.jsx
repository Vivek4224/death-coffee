import React from "react";
import Header from "../ui/component/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../ui/component/footer/Footer";
import Home from "../ui/pages/Home/Home";
import Login from "../ui/pages/Login/Login";
import Signup from "../ui/pages/Signup/Signup";
import Error404 from "../ui/pages/Error404/Error404";
import { Provider } from "react-redux";
import store from "../redux/app/store";
import Dashboard from "../ui/pages/dashboard/Dashboard";
import Profile from "../ui/pages/profile/Profile";
import {
    ProtectedRoute,
    AdminProtected,
} from "./ProtectedRoute/ProtectedRoute";
import Search from "../ui/pages/search/Search";
import About from "../ui/pages/About/About";
import Product from "../ui/pages/product/Product";
import Subscribe from "../ui/pages/Subscribe/Subscribe";

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />

                        {/*--------- common -----------*/}
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route
                            path="/profile"
                            element={<ProtectedRoute Component={<Profile />} />}
                        />
                        <Route path="/searchbar" element={<Search />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/subscribe" element={<Subscribe />} />

                        {/*--------- admin -----------*/}
                        <Route
                            path="/dashboard"
                            element={<AdminProtected Component={<Dashboard />} />}
                        />
                        <Route path="/product" element={<AdminProtected Component={<Product />} />} />

                        {/*--------- error -----------*/}
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                    <Footer />
                </Provider>
            </BrowserRouter>
        </>
    );
}
