// import { UserTemplate } from "../../Admin/Dashboard/DoctorMiniList"

import { useEffect, useState } from "react"
import { PatientBillingTableStyle } from "../../../types/hardcoded/styleEnum"
import { useSelector } from "react-redux"
import { useFetchDeleteTemplate, useFetchGetTemplate } from "../../../hooks/usePatient"

function BillingBody() {
    const [view, setView] = useState({})
    const [refresher, setRefresher] = useState({
        refresh: () => {}
    })

    return (
        <div className="w-[100%] h-[100%] flex">
            <BillingData refresher={setRefresher} setdata={setView} />
           { view.amount && <BillingPopup refreshFunc={refresher} data={view} /> }
        </div>
    )
}

function BillingData(props: { setdata: Function, refresher: Function }) {
    return (
        <div className="w-[70%] h-[100%] px-10">
            <div className="flex flex-row pt-3 w-[80%] text-black">
                <h1 className="font-bold cursor-pointer">Pending</h1>
                <h1 className="ml-20 cursor-pointer font-bold text-orange-500 border-b-4 border-orange-400 pb-1">Billing History</h1>
            </div>
            <BillingList refresher={props.refresher} setdata={props.setdata} />
        </div>
    )
}

function BillingList(props: { setdata: Function, refresher: Function }) {
    const slice = useSelector((state: any) => state).authReducer
    const [billing, setBilling] = useState<object[]>([])

    async function getAndSetData() {
        const url = 'http://localhost:2000/admin-service/appoint_payment/getForPatient/?id=' + slice.id
        const response = await useFetchGetTemplate(url)
        setBilling(response)
        if(response.length > 0) {
            props.setdata(response[0])
        } else {
            props.setdata({})
        }
    }
    
    
    useEffect(() => {
        getAndSetData()
        props.refresher({refresh: getAndSetData})
    }, [])

    return (
        <div className="mt-8">
            <table className="w-[100%]">
                <BillingListTitle />
                {
                    billing.map((item: any) => {
                        return (
                            <BillingListData data={item} setData={props.setdata} />
                        )
                    })
                }
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
            <th className={TITLE + ' pl-9'}>source</th>
        </tr>
    )
}

function BillingListData(props: { data: any, setData: Function }) {
    const { payment_id, diagnosys, source, type, date, amount } = props.data
    const { DATA  } = PatientBillingTableStyle
    
    return (
        <tr 
            onClick={e => props.setData(props.data)}
            className="billing-data hover:shadow-xl hover:cursor-pointer"> 

            <td className={DATA}>{type}</td>
            <td className={DATA}>{diagnosys}</td>
            <td className={DATA}>{amount}</td>
            <td className={DATA}>{date}</td>
            <td className={DATA + ' max-w-5 overflow-hidden'}>{payment_id}</td>
            <td className={DATA + ' pl-9'}>{source}</td>
        </tr>
    )
}

function BillingPopup(props: { data: any, refreshFunc: any }) {
    const { diagnosys, type, date, _id } = props.data

    async function deletePaymentList() {
        const response = await useFetchDeleteTemplate('http://localhost:2000/admin-service/appoint_payment/delete/?id='+_id)
        props.refreshFunc.refresh()
    }

    return (
        <div className="w-[30%] h-[100%] flex justify-center">
            <div className="bg-orange-500 text-lg w-[75%] h-[36%] mt-[4em] rounded-lg items-start flex flex-col px-5">
                <h1 className="mt-3">{type}</h1>
                <h1 className="font-semibold text-3xl mt-6">{diagnosys}</h1>
                <h1>{'Paid on ' + date}</h1>
                <button
                    onClick={deletePaymentList}
                    className="mt-6 border-white border-[1px] px-2 rounded-md">Delete from list</button>
            </div>
        </div>
    )
}

export default BillingBody