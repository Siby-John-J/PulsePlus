import React from 'react'

function PatientTitle() {
  return (
    <tr className="bg-blue-400 text-white h-[3em] rounded-md">
      <th className="text-left font-medium px-7 text-[12px]">NAME</th>
      <th className="text-left font-medium px-7 text-[12px]">#ID</th>
      <th className="text-left font-medium px-7 text-[12px]">BLOOD</th>
      <th className="text-left font-medium px-7 text-[12px]">PH</th>
      <th className="text-left font-medium px-7 text-[12px]">AGE</th>
    </tr>
  )
}

export default PatientTitle