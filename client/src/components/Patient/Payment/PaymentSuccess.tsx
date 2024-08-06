import React, { useEffect } from 'react'
import { useFetchPostTemplate } from '../../../hooks/usePatient'

function PaymentSuccess() {
  const par = new URLSearchParams(window.location.search)

  const params: any = {}
  const data = {}
  for(const [key, val] of par) {
      params[key] = val
  }

  useEffect(() => {
    useFetchPostTemplate('http://localhost:2000/admin-service/appoint_payment/create', params)
  }, [])

  return (
    <div>PaymentSuccess</div>
  )
}

export default PaymentSuccess