import React from 'react'

export default function SuccessModal({ email }) {
    return (
        <div>
            <p>Please check your email: {email}</p>
            <p>We have sent you a reset password link in the mail</p>
            <p>Click on the link to reset the password</p>
        </div>
    )
}
