import React from "react";
import { DoctorChatTextHolder, PatientChatTextHolder } from "../Chat/ChatData/ChatDataBody";

function TextHolder() {
    return (
        <div className='bg-white w-[30%] h-[80%] rounded-r-md'>
            <div 
                className="w-full h-[10%] flex items-center font-normal border-b-2 border-black pl-6 text-[1.2em]">
                <h1>Text Chat</h1>
            </div>
            <div className="w-full h-[80%] bg-white overflow-scroll">
                <DoctorChatTextHolder color="bg-red-500" text="lal" />
                <PatientChatTextHolder text="nigasss" />
            </div>
            <div className="w-full h-[10%] flex justify-center items-center">
                <div className="flex flex-row py-1 w-[90%] px-4 border-gray-300 shadow-md rounded-md">
                    <input type="text" className="w-[16em] outline-none" placeholder="Type Anything... " />
                    <button className="bg-emerald-400 px-5 py-2">send</button>
                </div>
            </div>
        </div>
    )
}

export default TextHolder;
