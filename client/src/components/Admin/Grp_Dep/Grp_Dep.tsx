import ContactList from "./ContactList/ContactList"
import DataBody from "./DataBody/DataBody"
import Info from "./Info/Info"

function Grp_Dep() {
  return (
    <div className='bg-gray-50 w-[80%] flex flex-row'>
      <ContactList />
      <DataBody />
      <Info />
    </div>
  )
}

export default Grp_Dep