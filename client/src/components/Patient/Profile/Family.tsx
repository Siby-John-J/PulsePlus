function Family() {
    return (
        <div className="family bg-slate-300 text-black col-span-2 row-span-3 rounded-2xl flex flex-col items-center">
            <div className="font-semibold text-xl mt-1 ">Family</div>
            <div className="flex flex-col h-[70%] w-[90%] mt-2">
                <FamilyModel />
                <FamilyModel />
            </div>
            <div className="">Add Member</div>
        </div>
    );
}

function FamilyModel() {
    return (
        <div className="flex flex-row justify-evenly items-center mb-2">
            <div className="bg-black h-10 w-10 rounded-full"></div>
            <div className="flex flex-col justify-center align-middle">
                <h1 className="m-0 p-0">Alessa John</h1>
                <p className="font-extralight">Sister</p>
            </div>
            <div className="">D</div>
        </div>
    );
}

export default Family