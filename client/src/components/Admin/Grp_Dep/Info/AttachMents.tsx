import { useState } from "react"
import { Empty } from "./MultiMedia"

function AttachMents() {
    const [isData, setIsData] = useState(true)

    return (
        <div className="px-3">
            <h1 className="font-semibold">Attachments</h1>
            {
                isData ? <>
                    <h1 className="text-[13px]">Source file</h1>
                    <div className="overflow-hidden h-[5em]">
                        <File />
                        <File />
                        <File />
                    </div>
                    <div className="w-full flex justify-center">
                        <h1 className="border-b-2 border-black w-fit">View All</h1>
                    </div>
                </> :  <Empty type="attachments" />
            }
        </div>
    )
}

function File() {
    return (
        <div className="py-1 flex flex-row items-center justify-evenly">
            <div className="w-[2em] h-[2em] bg-blue-500"></div>
            <h1 className="font-normal text-[13px]">Complete Course on memes</h1>
        </div>
    )
}

export default AttachMents