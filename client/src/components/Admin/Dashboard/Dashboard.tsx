import { ContentInfo, ContentTitle } from "./Content"
import { BookedAppoientments } from "./MiniAppoinetments"
import DoctorMiniList from "./DoctorMiniList"
import AppoinetmentMessages from "./MiniAppoinetments"

export default function Dashboard() {
    return (
      <div className="w-[80%] h-[100%] flex flex-row">
        <div className="h-[100%] w-[75%]">
          <div className="w-[95%] h-[30%]  flex flex-col items-center justify-evenly">
            <ContentTitle />
            <ContentInfo />
          </div>
          <div className="w-[90%] h-[30%] ">
  
          </div>
          <div className="w-[90%] h-[30%] flex flex-col items-center">
            <BookedAppoientments />
          </div>
        </div>
        <div className="w-[23%] h-[100%] flex flex-col justify-around">
          <DoctorMiniList />
          <AppoinetmentMessages />
        </div>
      </div>
    )
}