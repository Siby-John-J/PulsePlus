import MessageData from "./MessageData"

function Messages() {
  return (
    <div className="w-[80%] flex flex-row justify-evenly">
        <MessageHolder data={{header: 'pending', headerColor: 'bg-blue-400'}} />
        <MessageHolder data={{header: 'approved', headerColor: 'bg-green-400'}} />
        <MessageHolder data={{header: 'rejected', headerColor: 'bg-red-400'}} />
    </div>
  )
}

function MessageHolder(props: any) {
    return (
        <div className="w-[30%] h-[95%] flex flex-col justify-evenly">
            <MessageHeader data={props.data} />
            <MessageContent />
        </div>
    )
}

function MessageHeader(props: any) {
    const { header, headerColor } = props.data

    return (
        <div className={"w-full h-[10%] rounded-lg flex flex-row items-center justify-between px-5 " + headerColor}>
            <h1 className="text-[17px] font-medium text-white">{header}</h1>
            {/* <div className="bg-gray-200 w-[60%] h-full"></div> */}
        </div>
    )
}

function MessageContent() {
    return (
        <div className="w-full h-[82%] bg-slate-100 flex flex-col">
            <MessageData />
            <MessageData />
            <MessageData />
        </div>
    )
}

export default Messages
