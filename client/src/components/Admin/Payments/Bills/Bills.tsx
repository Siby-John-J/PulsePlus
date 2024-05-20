import BillModel from "./BillModel"

function Bills() {
  return (
    <div className="w-[100%] h-[30%] flex flex-row justify-evenly items-center px-1 bg-slate-300">
        <BillModel color="bg-green-500" amount={1234334} type="ALL" />
        <BillModel color="bg-white" amount={1234} type="INCOME" />
        <BillModel color="bg-white" amount={34342} type="SPEND" />
        <BillModel color="bg-white" amount={1234} type="PENDING" />
        <BillModel color="bg-white" amount={54355} type="SALARY" />
    </div>
  )
}

export default Bills