
function ChatTitle() {
  return (
    <div className='h-full w-full'>
        <ChatTitleHeading />
        <ChatTitleDetails />
    </div>
  )
}

function ChatTitleHeading() {
    return (
        <div className="w-full h-[45%] border-b-[1px] border-gray-500">
            <div className="bg-black w-full h-[12em] rounded-b-md"></div>
            <div className="flex flex-col justify-evenly items-center translate-y-[-4em] mx-[15%] bg-white w-[70%] h-[8.4em] rounded-md">
                <h1 className="font-medium">Flexer</h1>
                <h1 className="text-[14px]">Niggers</h1>
                <h1 className="font-medium">San nigasuo</h1>
                <div className="h-[3em] w-full">

                </div>
            </div>
        </div>
    )
}

function ChatTitleDetails() {
    return (
        <div className=" w-full h-[55%]">
            <div className=" w-full py-2 px-2 h-fit ">
                <h1>User information</h1>
                <div className="">
                    <SmallInfo data={{title: 'email', info: 'romysiby@gmail.com'}} />
                    <SmallInfo data={{title: 'degree', info: 'MBBS'}} />
                </div>
            </div>
        </div>
    )
}

function SmallInfo(props: { data: { title: string, info: string } }) {
    const { title, info } = props.data

    return (
        <div className="flex flex-col py-2">
            <h1 className="text-[14px] text-gray-500">{title}</h1>
            <p className="">{info}</p>
        </div>
    )
}

export default ChatTitle