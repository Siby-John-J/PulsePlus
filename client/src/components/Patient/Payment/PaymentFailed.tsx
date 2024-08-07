import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router-dom'
import { useFetchDeleteTemplate } from '../../../hooks/usePatient'

function PaymentFailed() {
    const navigate = useNavigate()
    const par = new URLSearchParams(window.location.search)
    
    const q: any = {}
    for(const [key, val] of par) {
        q[key] = val
    }
    
    useEffect(() => {
        useFetchDeleteTemplate('http://localhost:2000/admin-service/appoint_payment/delete/id=' + q.id)
      }, [])
    
    
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