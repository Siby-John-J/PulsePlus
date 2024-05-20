import Bills from "./Bills/Bills"
import PaymentData from "./PaymentData/PaymentData"

function Payments() {
  return (
    <div className=" w-[80%]">
      <div className="py-4 px-5">
        <h1 className="text-xl font-medium">Payments</h1>
      </div>
      <Bills />
      <PaymentData />
    </div>
  )
}

export default Payments
