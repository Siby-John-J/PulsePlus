import { Link, Outlet } from "react-router-dom"
import { AdminModelLoader } from "../ModelLoader"

function Admin() {
  return (
    <>
    <AdminModelLoader />
    <div className=" w-[100%] h-[100%]">
      <AdminHeader />
      <div className="flex flex-row w-[100%] h-[90%]">
        <AdminSideBar />
        <Outlet />
      </div>
    </div>
    </>
  )
}

function AdminSideBar() {
  const hover = 'bg-slate-100 w-[100%] border-l-[5px] border-blue-600 text-blue-600'

  return (
    <div className=" h-[100%] w-[20%] flex flex-col">
        <NavigationButton data={{link: '/admin/dashboard', content: 'Dashboard'}} />
        <NavigationButton data={{link: '/admin/patients', content: 'Patients'}} />
        <NavigationButton data={{link: '/admin/doctors', content: 'Doctors'}} />
        <NavigationButton data={{link: '/admin/grp_dep', content: 'Groups & Departments'}} />
        <NavigationButton data={{link: '/admin/payments', content: 'Payments'}} />
        <NavigationButton data={{link: '/admin/messages', content: 'Messages'}} />
        <NavigationButton data={{link: '/admin/ratings', content: 'Ratings'}} />
    </div>
  )
}

function AdminHeader() {
  return (
    <div className="w-[100%] h-[10%] border-b-[1px] border-gray-400 px-12 flex flex-row items-center">
      <h1 className="font-semibold text-3xl">CROSSPANEL</h1>
      <input className="mx-[5em] w-[17em] h-[2em] bg-slate-200 text-[17px] outline-none pl-4 rounded-md" placeholder="Search" type="text" />
    </div>
  )
}

function NavigationButton(props: any) {
  const { link, content } = props.data

  return (
    <Link to={link}>
    <div className="py-[1em] px-[3em] font-medium text-lg">
      {content}
    </div>
  </Link>
  )
}

export default Admin