import BillingBody from "./BillingBody"
import BillingHeader from "./BillingHeader"

import './Billing.css'

function Billing() {
  return (
    <div className="w-[80%]">
        <BillingHeader />
        <BillingBody />
    </div>
  )
}

export default Billing