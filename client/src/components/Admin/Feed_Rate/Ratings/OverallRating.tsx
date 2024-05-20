import { useState } from "react"
import { Ratingtype } from "../../../../types/propTypes"

function OverallRating() {
  return (
    <div className='bg-gray-100 w-[40%] h-[100%] flex justify-center items-center'>
      <div className=" h-[90%] w-[90%] flex flex-col items-center">
        <OverallTitle />
        <OverallData />
      </div>
    </div>
  )
}

function OverallTitle() {
  return (
    <div className="bg-white w-[100%] h-[40%] flex flex-col justify-center items-center">
      <div className="flex flex-row justify-evenly">
        <h1 className="text-lg font-semibold w-[50%] px-3 py-2">
          Overall Rating for This Web app
        </h1>
        <RatingCount />
      </div>
      <input type="text" className="outline-none border-black border-[2px] my-8 rounded-md px-3 w-[80%] h-[3em]" placeholder="Search in review" />
    </div>
  )
}

function RatingCount() {
  return (
    <div className="shadow-xl w-[30%] rounded-md flex flex-col items-center justify-center text-center">
      <h1 className="text-lg font-semibold">{3.4}</h1>
      <p className="text-[13px] font-normal">
        Average Customer Rating
      </p>
    </div>
  )
}

function OverallData() {
  return (
    <div className="flex flex-col w-[100%] h-[60%]">
      <div className="w-[100%] px-7">
        <h1>Reviews</h1>
      </div>
      <div className="w-[100%] py-3 flex flex-col items-center">
        <RatingBar count={233} star={5} />
        <RatingBar count={123} star={4} />
        <RatingBar count={64} star={3} />
        <RatingBar count={5} star={2} />
        <RatingBar count={2} star={1} />
      </div>
    </div>
  )
}

function RatingBar(props: Ratingtype) {
  const { star, count } = props
  const width = `w-[${52}%]`

  return (
    <div className="w-[90%] flex items-center mb-3">
      <h1 className="text-lg font-semibold mx-2">{star}</h1>
      {/* <div className="h-[2em] w-[2em] bg-blue-500"></div> */}
      <div className="flex flex-row px-2 items-center">
        <div className="bg-white rounded-md w-[20em] h-[1em]">
          <div className={"bg-blue-500 rounded-md h-[1em] " + width}></div>
        </div>
      </div>
      <h1 className="font-thin text-center">{count}</h1>
    </div>
  )
}

export default OverallRating