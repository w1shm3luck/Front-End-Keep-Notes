import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from './Header'
function login () {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/add")
        }
         },[])

    return (
        <div>
            <Header />
            

        </div>


    )





}