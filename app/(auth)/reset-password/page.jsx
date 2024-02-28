"use client"
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function page() {
    const searchParams = useSearchParams()
    const [id, setId] = useState(searchParams.get("id"))
    const [token, setToken] = useState(searchParams.get("token"))
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isAuthentic, setIsAuthentic] = useState(true)

    const router = useRouter()

    //get user and check if id of link is same as user.id
    useEffect(() => {
        const getId = async () => {
            const response = await fetch("api/getUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            const user = await response.json();

            if (!user) {
                setIsAuthentic(false)
                return
            }
            if (user._id != id) {
                setIsAuthentic(false)
                return
            }
        }
        getId()
    }, [id])

    const handleReset = (e) => {
        e.preventDefault()
        if (!password || !confirmPassword) return;
        if (password !== confirmPassword) return

        const resetPassword = async () => {
            const response = await fetch("api/reset", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id, password, token })
            })
            const data = await response.json();
            console.log(data)

            if (response.ok) {
                router.push("/login")
            }
        }

        resetPassword()
    }

    console.log({ id, token })

    return (
        <div>
            {isAuthentic ?
                <div>
                    <h1>Reset your password</h1>
                    <form onSubmit={handleReset}>
                        <div>
                            <label htmlFor="password" >New Password</label>
                            <input type="text" value={password} onChange={e => setPassword(e.target.value)} id="password" placeholder="Password" name="password" />
                        </div>
                        <div>
                            <label htmlFor="confirm">Confirm password</label>
                            <input type="confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} id='confirm' placeholder="Confirm Password" name="confirm_password" />
                        </div>
                        <button>Reset Password</button>
                    </form>
                </div>
                :
                <h1>Something went wrong</h1>
            }
        </div>
    )
}
