import { useState } from "react"
import { useFetchPutTemplate } from "../../hooks/usePatient"
import { useSelector } from "react-redux"

const castVote = async (choice: string, question: string, groupId: string) => {
    await useFetchPutTemplate(`http://localhost:2000/doctor-service/groupmessage/${groupId}/poll`, {
        choice,
        question
    })
}

function GroupPoll(props: { options: any, question: string }) {
    const { options, question } = props

    return (
        <div className=" px-2 w-[20vw] flex flex-col justify-evenly h-fit">
            <div className="bg-black text-white px-2 w-full rounded-md my-2">
                <Question question={question} />
            </div>
            {
                options.map((item: any) => <Option question={question} choice={item.choice} per={item.percentage} />)
            }
        </div>
    )
}

function Question(props: { question: string }) {
    return (
        <div>
            <h1 className="font-medium text-[14px] py-2">{ props.question }</h1>
        </div>
    )
}

function Option(props: { choice: string, per: number, question: string }) {
    const { choice, per } = props
    const empty = 100 - per
    const groupId = useSelector((data: any) => data).groupIdReducer.id

    return (
        <div onClick={e => castVote(choice, props.question, groupId)} className="flex items-center relative rounded-md w-[100%] h-[4em] my-1 hover:cursor-pointer hover:shadow-md border-black border-[1px]">
            <div className="flex flex-row items-center justify-between px-4 w-[100%] absolute">
                <h1 className="text-base font-medium ">{choice}</h1>
                <h1 className="font-light">{per + '%'}</h1>
            </div>
            <div style={{width:  `${per}%`}} className="rounded-l-md bg-green-400 h-full"></div>
            <div style={{width: `${empty}%`}} className="rounded-r-md bg-white h-full"></div>
        </div>
    )
}

export default GroupPoll