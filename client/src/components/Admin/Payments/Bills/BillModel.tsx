import { UserTemplateStyle } from "../../../../types/hardcoded/styleEnum"
import { BillingBar } from "../../../../types/propTypes"
import { UserTemplate } from "../../Dashboard/DoctorMiniList"

function BillModel(props: BillingBar) {
    const { amount, type, color } = props
    const textcol = color === 'bg-white' ? 'text-black' : 'text-white'

    return (
        <>
        <div className={color + ' rounded-lg w-[14em] h-[70%] ' + textcol}>
            <h1 className="text-xl font-semibold px-4 pt-4">{type}</h1>
            <h1 className="px-4 pt-2 font-normal">{'$ ' + amount}</h1>
            {
                type === 'SALARY' && 
                <button className="mx-4 mt-5 px-4 rounded-md pb-1 border-black border-[1px]">pay</button>
            }
        </div>
        {/* <PayModel />     */}
        </>
    )
}

function PayModel() {
    return (
        <div className="absolute h-fit py-4 w-[25em] bg-gray-800 flex flex-col rounded-md text-white">
            <div className=" px-10 pt-3 flex flex-row items-center w-[100%] justify-between">
                <h1 className="text-xl">Pay Salary</h1>
                <button className="bg-blue-500 px-5 p-[2px] text-lg text-white rounded-lg">pay-all</button>
            </div>
            <div className="w-[100%] h-fit mt-5">
                <SinglePay />
                <SinglePay />
                <SinglePay />
                <SinglePay />
                <SinglePay />
            </div>
        </div>
    )
}

function SinglePay() {
    const { ROW } = UserTemplateStyle

    return (
        <div className="flex flex-row items-center justify-between px-5 py-2">
            <UserTemplate details={{name: 'Dr Siby John', details: '', style: 'text-[12px]', mainStyle: ROW + ' text-white'}} />
            <div className="flex flex-row">
            <h1>$ 34324</h1>
            <button className="border-white border-[1px] px-3 rounded-md mx-3">pay</button>
            </div>
        </div>
    )
}

export default BillModel
