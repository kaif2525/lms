'use client'
import React, { useState } from 'react'
import SuccessModal from './Components/SuccessModal'
import ErrModal from './Components/ErrModal'

export default function Forgot() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [resetSuccess, setResetSuccess] = useState(false)
    const [resetError, setResetError] = useState("")

    const handleForgot = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await fetch("api/forgot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            })
            const data = await response.json()
            console.log(data)
            setResetSuccess(true)
            setLoading(false)
            setResetError('')
        } catch (error) {
            setResetSuccess(null)
            setResetError(error.message)
        }
    }

    return (
        <div>
            {resetError ? <ErrModal message={resetError} /> : null}
            {resetSuccess ? <SuccessModal email={email} /> : null}
            <form onSubmit={handleForgot}>
                <h1>Forgot Password ?</h1>
                <p>Don't worry! It happens. Please enter your email address. we will send a password reset link</p>
                <div className='flex flex-col'>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name='email' id="email" placeholder='Your email address'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <button name='reset-pwd-btn'>{!loading ? "Get secure Link" : "Sending...."}</button>
                </div>
            </form>
        </div>
    )
}
