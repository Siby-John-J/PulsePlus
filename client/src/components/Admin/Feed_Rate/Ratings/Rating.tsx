import React from 'react'

function Rating() {
  return (
    <div className='my-7 border-black border-[1px] w-[27em] h-fit rounded-md'>
      <RatingTitle />
      <RatingContent />
      <RatingComment />
    </div>
  )
}

function RatingTitle() {
  return (
    <div className='flex flex-row px-10 mt-3 justify-evenly'>
      <div className='flex flex-row items-center'>
        <div className='bg-blue-400 mx-1 h-[1.3em] w-[1.3em]'></div>
        <div className='bg-blue-400 mx-1 h-[1.3em] w-[1.3em]'></div>
        <div className='bg-blue-400 mx-1 h-[1.3em] w-[1.3em]'></div>
        <div className='bg-blue-400 mx-1 h-[1.3em] w-[1.3em]'></div>
        <div className='bg-blue-400 mx-1 h-[1.3em] w-[1.3em]'></div>
      </div>
      <h1>4 out of 5 stars</h1>
    </div>
  )
}

function RatingContent() {
  return (
    <div className='flex flex-col px-4 py-3'>
      <div>
        <h1 className='text-md font-semibold'>Romy Siby - April 12, 1938</h1>
      </div>
      <div className='text-sm py-2'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias repellat neque eos fuga obcaecati harum iure ipsam! Reiciendis qui illo maxime dolore tempora, architecto harum ullam, commodi eos nihil quidem!</p>
      </div>
      <div>
        <button className='bg-blue-500 px-4 py-1 rounded-md text-white'>response</button>
      </div>
    </div>
  )
}

function RatingComment() {
  return (
    <div></div>
  )
}
export default Rating