import './Doctors.css'

function DoctorListHeader() {
  return (
    <div className='w-full h-[15%] flex flex-col items-center'>
        <DoctorSearchBar />
        <DoctorDivisions />
    </div>
  )
}

function DoctorSearchBar() {
    return (
        <div className='w-full flex flex-row items-center justify-between px-[5%] h-[50%]'>
            <h1 className='text-[22px] font-medium'>Doctors</h1>
            <input className='w-[18em] rounded-full h-[2em] px-5 doc-search outline-none' placeholder='Search Doctor' type="text" />
        </div>
    )
}

function DoctorDivisions() {
    return (
        <div className='items-center flex flex-row w-[90%] h-[40%] mt-1 rounded-xl justify-between shadow-lg'>
            <ToggleDivisions />
            <ToggleGridOrList />
        </div>
    )
}

function ToggleDivisions() {
    return (
        <div className='flex flex-row justify-between items-center w-[80%] h-[90%]'>
            <ToggleBtn data={{isSelect: true, content: 'All'}} />
            <ToggleBtn data={{isSelect: false, content: 'Cardiology'}} />
            <ToggleBtn data={{isSelect: false, content: 'Newrology'}} />
        </div>
    )
}

function ToggleBtn(props: any) {
    const { isSelect, content } = props.data
    const style = 'flex justify-center py-1 mx-2 w-[100%] rounded-full'
    const addStyle = isSelect === true ? ' text-white bg-blue-500': 'text-black'

    return (
        <h1 className={style + addStyle}>{content}</h1>
    )
}

function ToggleGridOrList() {
    return (
        <div className='bg-green-400 h-[90%] w-[10%]'>

        </div>
    )
}

export default DoctorListHeader