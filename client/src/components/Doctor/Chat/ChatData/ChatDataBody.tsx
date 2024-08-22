
function ChatDataBody(props: { data: any }) {
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
                            <DoctorChatTextHolder color="bg-red-500" text={items['p2']} />
                        )
                    }
                })
            }
        </div>
    )
}

export function DoctorChatTextHolder(props: { text: string, color: string }) {
    return (
        <div className="w-[100%] h-fit items-center flex justify-end my-3">
            <div className={ props.color + " text-white break-words max-w-[50%]  ml-12 items-center px-5 py-2 rounded-md"}>
                <h1 className="">{props.text}</h1>
            </div>
        </div>
    )
}

export function PatientChatTextHolder(props: { text: string }) {
    return (
        <div className="w-[100%] h-fit items-center flex my-3">
            <div className="bg-gray-200 break-words max-w-[50%] items-center py-2 px-5 rounded-md">
                <h1 className="">{props.text}</h1>
            </div>
        </div>
    )
}

export default ChatDataBody