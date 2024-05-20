import Department from "./Department"
import Group from "./Group"
import SingleGroup from "./SingleGroup"

function MainContent() {
  return (
    <div className=" h-[85%] flex flex-row items-center justify-evenly">
      <div className="w-[49%] bg-gray h-[99%] rounded-lg shadow-lg">
        {/* <Department /> */}
        <Group />
      </div>
      <div className="w-[49%] h-[99%] rounded-lg shadow-lg">
        <SingleGroup />
      </div>
    </div>
  )
}

export default MainContent
