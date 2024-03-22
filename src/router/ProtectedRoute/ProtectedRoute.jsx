import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const ProtectedRoute = ({ Component }) => {
    const navigate = useNavigate()
    useEffect(() => {
        let jsonData = localStorage.getItem("userLogin")
        let normalData = JSON.parse(jsonData)
        if (!normalData) {
            navigate("/");
            toast.info("You are not Login....!")
        }
    })
    return (
        <>
            {Component}
        </>
    )
};

export const AdminProtected = ({ Component }) => {
    const navigate = useNavigate()
    useEffect(() => {
        let jsonData = localStorage.getItem("userLogin")
        let normalData = JSON.parse(jsonData)
        if (!normalData || normalData?.userType!=="admin") {
            navigate("/");
            toast.info("You are not Admin....!")
        }
    })
    return (
        <>
            {Component}
        </>
    )
};