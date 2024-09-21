import { useState } from "react"

function MultiMedia() {
    const [isData, setIsData] = useState(true)

    return (
        <div className="px-3">
            <h1 className="font-semibold mb-2">Multimedia</h1>
            {
                isData ? <>
                    <div className="w-[13em] ml-2 grid grid-cols-3 gap-2 grid-rows-2 px-2 mb-3">
                        <MediaHolder />
                        <MediaHolder />
                        <MediaHolder />
                        <MediaHolder />
                        <MediaHolder />
                    </div>
                    <div className="w-full flex justify-center">
                        <h1 className="border-b-2 border-black w-fit">View All</h1>
                    </div>
                </> : <Empty type="media" />
            }
        </div>
    )
}

function MediaHolder() {
    return (
        <div className="w-[3.2em] h-[3.2em] bg-black"></div>
    )
}

export function Empty(props: { type: string }) {
    return (
        <h1 className="my-4 text-center font-thin">{ 'No ' + props.type }</h1>
    )
}

export default MultiMedia