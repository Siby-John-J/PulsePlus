import { useState } from "react"

function castVote() {
    alert('voted')
}

function GroupPoll() {
    const [poll, setPoll] = useState<{question: string, options: any}>({
        question: 'who invented skibidi toilet?',
        options: [
            { choice: 'persident biden', percentage: 5 },
            { choice: 'your mom', percentage: 15 },
            { choice: 'susy bakka', percentage: 53 },
            { choice: 'rizzler', percentage: 2 }
        ]
    })

    const { options, question } = poll

    return (
        <div className="mx-3 bg-blue-200 rounded-md px-3 w-[20vw] flex flex-col justify-evenly h-fit">
            <Question question={question} />
            {
                options.map((item: any) => <Option choice={item.choice} per={item.percentage} />)
            }
        </div>
    )
}

function Question(props: { question: string }) {
    return (
        <div>
            <h1 className="font-medium text-lg py-2">{ props.question }</h1>
        </div>
    )
}

function Option(props: { choice: string, per: number }) {
    const { choice, per } = props
    const empty = 100 - per

    return (
        <div onClick={castVote} className="flex items-center relative rounded-md w-[100%] h-[4em] my-1 hover:cursor-pointer hover:shadow-md border-black border-[1px]">
            <div className="flex flex-row items-center justify-between px-4 w-[100%] absolute">
                <h1 className="text-base font-medium ">{choice}</h1>
                <h1 className="font-light">{per + '%'}</h1>
            </div>
            <div style={{width:  `${per}%`}} className="rounded-l-md bg-emerald-300 h-full"></div>
            <div style={{width: `${empty}%`}} className="rounded-r-md bg-white h-full"></div>
        </div>
    )
}

export default GroupPoll