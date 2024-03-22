import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function ProtectedRoute({ Component }) {
    const navigate = useNavigate()
    useEffect(() => {
        let jsonData = localStorage.getItem("userLogin")
        let normalData = JSON.parse(jsonData)
        if(!normalData){
            navigate("/");
            toast.info("You are not Login....!")
        }
    })
    return (
        <>
            {Component}
        </>
    )
}
