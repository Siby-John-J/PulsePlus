import React, { useEffect } from 'react'
import { useFetchDeleteTemplate, useFetchGetTemplate, useFetchPostTemplate, useFetchPutTemplate } from '../../../hooks/usePatient'

async function updateData(params: object) {
  const res = await useFetchPostTemplate('http://localhost:2000/admin-service/appoint_payment/create', params)
  const response = await useFetchGetTemplate(
      `http://localhost:2000/communication-service/doctor_notification/getOne/?id=${params.appointId}&param=appointId`
  )

  const startTime = response.startTime + response.span
  const endTime = response.endTime + response.span
  
  const { date, appointId } = response
  
  // delete appoint-not from db
  await useFetchDeleteTemplate('http://localhost:2000/communication-service/doctor_notification/remove/?id=' + params.appointId)
  // create upcoming appointment-list
  await useFetchPutTemplate('http://localhost:2000/admin-service/appointment/addItem', {
    id: params.appointId,
    date,
    time: (startTime + ' - ' + endTime),
    span: 'new',
    valid: true
  })
}

function PaymentSuccess() {
  const par = new URLSearchParams(window.location.search)

  const params: any = {}
  for(const [key, val] of par) {
      params[key] = val
  }

  console.log(params);
  
  // startTime: string
  // endTime: string
  // date: string
  // valid: true

  useEffect(() => {
    updateData(params)
  }, [])

  return (
    <div>PaymentSuccess</div>
  )
}

export default PaymentSuccess