import React from 'react';
import { Progress} from 'reactstrap';
import {FaStar} from 'react-icons/fa'
import './css/reviews.css'

const ReviewChart = ({starRatings, aveRating}) => {

 return (
  <div className='review__rating' sm="12" md="6" lg="6">

{/* Render star icons */}
    <div className="justify-content-center pb-3">
      {[...Array(5)].map((_,i)=> {
        const overallStarRating = i+1;
        return(
            <FaStar 
              key={overallStarRating} 
              className="review__aveRating"
              color={overallStarRating <= aveRating ? "#ffc107" : "rgb(128,128,128)"}
            />
        )   
      })} 
      <span className='mx-3'><button  className='p-1 px-3'>SEE REVIEWS</button></span>
    </div> 
    
{/*Render progress chart  */}
    {[...Array(5)].map((_,i) => {
      const index = 5-i;
      let countOfAStarReviews = [];
      countOfAStarReviews = starRatings.filter(starRating=>{ return(starRating == index)})
      const countOfAStarReviewsPercentage = Math.trunc((countOfAStarReviews.length/(starRatings.length))*100)
      return (
        <div key={index} className="mb-3 ">
          <span className="col-3 p-1">{index} star</span>
          <Progress 
            id="progressTooltip" 
            value={countOfAStarReviewsPercentage}>
              <span >{countOfAStarReviewsPercentage}%</span>
          </Progress>
        </div>
      )
    })}

  </div>

 )

}

export default ReviewChart