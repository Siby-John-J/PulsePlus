import React from 'react'

function PatientTitle() {
  return (
    <tr className="bg-white text-black h-[3em] rounded-md">
      <th className="text-left font-medium px-7 text-[12px]">NAME</th>
      <th className="text-left font-medium px-7 text-[12px]">#ID</th>
      <th className="text-left font-medium px-7 text-[12px]">STATUS</th>
      <th className="text-left font-medium px-7 text-[12px]">PH</th>
      <th className="text-left font-medium px-7 text-[12px]">ACTIONS</th>
    </tr>
  )
}

export default PatientTitle