import RatingList from './Ratings/RatingList'
import OverallRating from './Ratings/OverallRating'

function RatingData() {
  return (
    <div className='h-[90%] w-[100%] flex flex-row'>
      <RatingList />
      <OverallRating />
    </div>
  )
}

export default RatingData