import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router-dom'

function PaymentFailed() {
    const navigate = useNavigate()
    const par = new URLSearchParams(window.location.search)

    const q: any = {}
    for(const [key, val] of par) {
        q[key] = val
    }
    
    console.log(q);
    
    
    return (
        <div>
            <p onClick={e => {
                navigate('/patient/dashboard?id=' + q.id)
            }}>back</p>
            <h1>PaymentFailed</h1>
        </div>
    )
}

export default PaymentFailed