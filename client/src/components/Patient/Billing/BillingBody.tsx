// import { UserTemplate } from "../../Admin/Dashboard/DoctorMiniList"

import { PatientBillingTableStyle } from "../../../types/hardcoded/styleEnum"

function BillingBody() {
  return (
    <div className="w-[100%] h-[100%] flex">
        <BillingData />
        <BillingPopup />
    </div>
  )
}

function BillingData() {
    return (
        <div className="w-[70%] h-[100%] px-10">
            <div className="flex flex-row pt-3 w-[80%] text-black">
                <h1 className="font-bold cursor-pointer">Pending</h1>
                <h1 className="ml-20 cursor-pointer font-bold text-orange-500 border-b-4 border-orange-400 pb-1">Billing History</h1>
            </div>
            <BillingList />
        </div>
    )
}

function BillingList() {
    return (
        <div className="mt-8">
            <table className="w-[100%]">
                <BillingListTitle />
                <BillingListData />
                <BillingListData />
                <BillingListData />
            </table>
        </div>
    )
}

function BillingListTitle() {
    const { TITLE  } = PatientBillingTableStyle

    return (
        <tr className="font-medium text-black">
            <th className={TITLE}>type</th>
            <th className={TITLE}>diagnosys</th>
            <th className={TITLE}>amount</th>
            <th className={TITLE}>date</th>
            <th className={TITLE}>payment-id</th>
            <th className={TITLE}>source</th>
        </tr>
    )
}

function BillingListData() {
    const { DATA  } = PatientBillingTableStyle

    return (
        <tr className="billing-data hover:shadow-xl hover:cursor-pointer"> 
            <td className={DATA}>appointment</td>
            <td className={DATA}>feaver</td>
            <td className={DATA}>3434</td>
            <td className={DATA}>09-11-2323</td>
            <td className={DATA}>idjfiaofj</td>
            <td className={DATA}>paypal</td>
        </tr>
    )
}

function BillingPopup() {
    return (
        <div className="w-[30%] h-[100%] flex justify-center">
            <div className="bg-orange-500 text-lg w-[75%] h-[36%] mt-[4em] rounded-lg items-start flex flex-col px-5">
                <h1 className="mt-3">appointment</h1>
                <h1 className="font-semibold text-3xl mt-6">feaver</h1>
                <h1>Paid on 09/11/2000</h1>
                <button className="mt-6 border-white border-[1px] px-2 rounded-md">Delete from list</button>
            </div>
        </div>
    )
}

export default BillingBody