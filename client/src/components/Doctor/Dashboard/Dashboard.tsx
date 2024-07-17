import { AdminProgress } from "../../../types/propTypes";
import "./animation.css";

function Dashboard() {
    return (
        <div className="w-[80%] h-[100%] flex flex-row bg-slate-200">
            <div className=" w-[60%] h-[100%] flex flex-col items-center">
                <DetailBanner />
                <Progress />
                <Walllet />
                <Message />
            </div>
            <div className="flex flex-col items-center w-[40%] mr-8">
                <Appoinements />
                <Results>
                    <ResultsModel />
                    <ResultsModel />
                    <ResultsModel />  
                </Results>
            </div>
        </div>
    );
}

function Walllet() {
    return (
        <div className="w-[90%]  flex flex-col justify-between">
            <div className="w-[100%] flex flow-row justify-between">
                <div className="bg-blue-600 rounded-lg font-mono shadow-md w-[50%] h-[100%] flex flex-col justify-evenly px-7 text-white">
                    <h1 className="text-2xl mt-5">Current Balance</h1>
                    <h1 className="text-3xl font-semibold mb-10">34,344</h1>
                </div>
                <div className="flex  items-end flex-col justify-between w-[50%] h-[100%] text-[1em]">
                    <div className="flex flex-row py-3 px-8 justify-between bg-white rounded-md w-[90%] border-[1px] ">
                        <h1 className="font-medium">Income</h1>
                        <h1 className="font-thin">10,000</h1>
                    </div>
                    <div className="flex flex-row py-3 px-8 justify-between bg-white rounded-md w-[90%] border-[1px] ">
                        <h1 className="font-medium">Spend</h1>
                        <h1 className="font-thin">3,000</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Results(props: any) {
    return (
        <div className="h-[14em] w-[100%] bg-white rounded-md flex flex-col items-center gap-2 pt-3">
            <div className="flex flex-row justify-between px-4 w-[100%]">
              <h1 className="font-medium text-[18px]">Surgeries</h1>
              <div className="flex flex-row">
                <h1>Edit</h1>
                <h1>Delete</h1>
              </div>
            </div>
            <div className="w-[100%] h-[10em] flex-col items-center justify-center holder overflow-y-scroll">
              { props.children }
            </div>
        </div>
    );
}

function ResultsModel() {
    return (
        <div className="bg-white rounded-xl mt-2 ml-6 shadow-lg w-[90%] h-[4em] justify-evenly flex flex-row items-center">
            <div className="">
                <h1 className="font-medium">Blood Sugar</h1>
                <h1 className="text-[13px] text-gray-500">3 june, 02:00 AM</h1>
            </div>
            <div className="items-center">
              <h1 className="text-[13px] text-gray-500">Duration</h1>
              <h1 className="font-medium text-[15px]">3hr 34min</h1>
            </div>
            <div className="flex flex-row items-center">
              <h1 className="font-medium">30%</h1>
              <div className="flex w-[5em] bg-gray-300 h-[3px] ml-3">
                <div className="w-[30%] bg-blue-500 h-[3px]"></div>
              </div>
            </div>
        </div>
    );
}

function AppoinementModel() {
    return (
        <div className="app-model bg-white shadow-lg h-[8em] w-[70%] mt-6 rounded-md cursor-grab">
            <div className="flex flex-row text-[12px] justify-between px-4 py-2 items-center">
                <div>
                    <h1 className="font-medium">Siby john j</h1>
                    <p className="text-[11px]">23 Years Old</p>
                </div>
                <div>
                    <h1>9:00 pm</h1>
                </div>
            </div>
            <div className="px-2 py-1 text-[12px]">
                niga iam feel like mah d is about drop dead
            </div>
        </div>
    );
}

function Appoinements() {
    return (
        <div className="w-[100%] h-[60%] mb-4 mt-8 flex flex-row items-center  rounded-md">
            <div className="app-holder overflow-scroll flex-col w-[100%] h-[100%]">
                <AppoinementModel />
                <AppoinementModel />
                <AppoinementModel />
                <AppoinementModel />
            </div>
            <div className=" h-[70%] w-[30%] flex flex-col justify-evenly">
                <div className="border-red-500 bg-red-500 bg-opacity-25 border-[2px] w-[100%] rounded-md h-[45%]"></div>
                <div className="border-green-400 bg-green-500 bg-opacity-25 w-[100%] border-[2px] rounded-md h-[45%]"></div>
            </div>
        </div>
    );
}

function Message() {
    return (
        <div className="0 w-[90%] h-[23%] mt-6 text-[16px]">
            <MessageModel />
        </div>
    );
}

function MessageModel() {
    return (
        <div className="flex flex-col border-green-600 border-[1px] rounded-md h-[100%] w-[50%]">
            <div className="flex py-3 justify-around flex-row bg-green-600 rounded-t-md text-white">
                <h1>Admin Message</h1>
                <div className="flex flex-row font-extralight">
                    <h1>09/11/2000 9:00pm</h1>
                    <br />
                    <h1></h1>
                </div>
            </div>
            <div className="flex flex-col h-[80%] px-4 py-2">
                <p className="text-[14px]">
                    the message is simple whch was once able to twice
                    reincarnate one with the power of shit
                </p>
            </div>
            <div className="flex flex-row w-[100%] justify-end px-7 pb-2">
                <button className="mx-7 bg-green-600 text-white px-5 rounded-md">
                    ok
                </button>
                <button>cancel</button>
            </div>
        </div>
    );
}

function DetailBanner() {
    return (
        <div className="bg-emerald-400 w-[90%] rounded-md h-[23%] mt-8 flex flex-col text-white">
            <div className="flex flex-row justify-between px-10 mt-3">
                <div>
                    <h1 className="text-[12px] mb-2">Welcome Back, </h1>
                    <h2 className="text-[20px] font-medium">Dr. Siby John</h2>
                    <p>MBBS, ABCD(Gynocology)</p>
                </div>
                <div className="bg-black rounded-full h-[6em] w-[6em]"></div>
            </div>
            <div className="w-[100%] pl-10 mt-4 text-[1.2em]">
                <div>You have total 10 Appoinements today!</div>
            </div>
        </div>
    );
}

function Progress() {
    return (
        <div className="w-[90%] h-[20%] mt-8 flex flex-row justify-between text-white">
            <ProgressModel props={{ data: "appoinements" }} />
            <ProgressModel props={{ data: "surgeries" }} />
            <ProgressModel props={{ data: "requests" }} />
        </div>
    );
}

function ProgressModel(prop: AdminProgress) {
    return (
        <div className="bg-blue-600 h-[80%] w-[30%] rounded-md shadow-xl flex flex-col justify-evenly">
            <div className="mb-4 font-medium ml-3 text-[13px]">
                {prop.props.data}
            </div>
            <div className="flex flex-col h-[3em]">
                <div className="ml-3 mb-3">4/10</div>
                <div className="ml-3 bg-black rounded-md h-[60%] w-[90%]"></div>
            </div>
        </div>
    );
}

function Request() {
    return <div></div>;
}

export default Dashboard;
