import { useState } from "react"
import ContactList from "./ContactList/ContactList"
import DataBody from "./DataBody/DataBody"
import Info from "./Info/Info"

function Grp_Dep() {
  const [isExpand, setIsExpand] = useState<boolean>(false)
  
  return (
    <div className='bg-gray-50 w-[80%] flex flex-row'>
      <ContactList setExpand={setIsExpand} />
      <DataBody expand={isExpand}  />
      {
        isExpand && <Info />
      }
    </div>
  )
}

export default Grp_Dep