
function AppoinementModel(props: any) {
    const { title, content } = props.data
    // const { age, name } = content

    console.log(title, content );
    

    return (
        <div className="app-model bg-white shadow-lg h-[8em] w-[70%] mt-6 rounded-md cursor-grab">
            <div className="flex flex-row text-[12px] justify-between px-4 py-2 items-center">
                <div>
                    <h1 className="font-medium">{content.name}</h1>
                    <p className="text-[11px]">{`${content.age}Years Old`}</p>
                </div>
                <div>
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="px-2 py-1 text-[12px]">{content.deceaseDiscription}</div>
        </div>
    );
}

function EmptyAppoints() {
    return (
        <div className="app-holder overflow-scroll flex items-center justify-center w-[100%] h-[100%]">
            <h1 className="font-bold text-[12px]">
                No Requests
            </h1>
        </div>
    )
}

export function Appoinements(props: any) {
    return (
        <div className="w-[100%] h-[60%] mb-4 mt-8 flex flex-row items-center  rounded-md">
            {
                !props.data ? <EmptyAppoints /> :
                <div className="app-holder overflow-scroll flex-col w-[100%] h-[100%]">
                    {
                        props.data.map((item: any) => {
                            return ( <AppoinementModel data={item} /> )
                        })
                    }
                </div>
                
            }

            <div className=" h-[70%] w-[30%] flex flex-col justify-evenly">
                <div className="border-red-500 bg-red-500 bg-opacity-25 border-[2px] w-[100%] rounded-md h-[45%]"></div>
                <div className="border-green-400 bg-green-500 bg-opacity-25 w-[100%] border-[2px] rounded-md h-[45%]"></div>
            </div>
        </div>
    );
}