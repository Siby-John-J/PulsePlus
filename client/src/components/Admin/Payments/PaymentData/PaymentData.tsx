import PaymentChart from "./PaymentChart"
import PaymentTable from "./PaymentTable"

function PaymentData() {
  return (
    <div className="w-[100%] h-[60.7%] flex flex-row">
        <PaymentTable />
        <PaymentChart />
    </div>
  )
}

export default PaymentData