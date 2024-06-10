
function Appointments() {
    return (
        <div className="appointments bg-slate-300 col-span-4 row-span-8 rounded-2xl flex flex-col items-center">
            <div className=" w-[90%] text-2xl font-medium text-black py-2">
                Appointments
            </div>
            <div className="flex flex-row items-center w-[90%] h-[60px] rounded-md">
                <div className="bg-white text-black px-14 py-2 rounded-md font-medium h-[2.5em] w-[50%] text-center">
                    Upcoming
                </div>
                <div className="text-black px-14 py-2 rounded-md font-medium h-[2.5em] w-[50%] text-center">
                    Past
                </div>
            </div>
            <div className="w-[90%] h-[80%]">
                <AppointmentModel />
            </div>
        </div>
    );
}

function AppointmentModel() {
    return (
        <div className="bg-white flex text-black flex-row mt-3 rounded-lg drop-shadow-md py-2 w-[90%]">
            <div className="pl-4">
                <h1 className="font-medium text-[15px]">
                    23 Nov, <br /> Tue
                </h1>
                <p>3am - 4am</p>
            </div>
            <div className="px-6">
                <h1>Diagnosys</h1>
                <h1 className="text-xl font-medium">Headache</h1>
                <p className="text-[13px]">Doctor Romy</p>
            </div>
            <div className="flex ml-[4em]">
                <div>
                    <h1 className="bg-blue-700 text-white text-[14px] px-5 rounded-md">
                        New
                    </h1>
                    {/* <div></div> */}
                </div>
            </div>
        </div>
    );
}
export default Appointments