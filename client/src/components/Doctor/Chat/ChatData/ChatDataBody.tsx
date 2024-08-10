
function ChatDataBody(props: { data: any }) {
    // console.log(props);
    
    return (
        <div className="w-[100%] h-[75%] px-[3em] pt-5">
            {
                props.data.map((items: any) => {
                    if(items['p1']) {
                        return (
                            <PatientChatTextHolder text={items['p1']} />
                        )
                    } else {
                        return (
                            <DoctorChatTextHolder text={items['p2']} />
                        )
                    }
                })
            }
        </div>
    )
}

function DoctorChatTextHolder(props: { text: string }) {
    return (
        <div className="bg-white w-[100%] h-fit items-center flex justify-end my-3">
            <div className=" bg-red-500 text-white break-words max-w-[50%]  ml-12 items-center px-5 py-2 rounded-md">
                <h1 className="">{props.text}</h1>
            </div>
        </div>
    )
}

function PatientChatTextHolder(props: { text: string }) {
    return (
        <div className="bg-white w-[100%] h-fit items-center flex my-3">
            <div className="bg-gray-200 break-words max-w-[50%] items-center py-2 px-5 rounded-md">
                <h1 className="">{props.text}</h1>
            </div>
        </div>
    )
}

export default ChatDataBody