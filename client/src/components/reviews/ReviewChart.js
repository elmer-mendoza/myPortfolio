import React from 'react';
import { Progress} from 'reactstrap';
import {FaStar} from 'react-icons/fa'
import './css/reviews.css'
import ReviewsModal from './ReviewsModal'
import {useQuery} from '@apollo/client'
import {GET_NUMSTARS} from '../graphql/query.js'
import Loading from "../loading//Loading";

const ReviewChart = () => {

  const {error,loading,data} = useQuery(GET_NUMSTARS)
  let starRatings
  let aveRating        
  if(loading){ return <Loading/> } 
  if(data) {
     starRatings = data.reviews.map(review => { return( review.numStar)})
     aveRating = starRatings.reduce((a,b)=> (+a)+(+b))/(starRatings.length);
  }

 return (
  <div className='review__rating' sm="12" md="6" lg="6">

{/* Render star icons */}
    <div className="d-flex justify-content-between pb-3">
      <div>
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
      </div>
      <ReviewsModal/>
    </div> 
    
{/*Render progress chart  */}
    {[...Array(5)].map((_,i) => {
      const index = 5-i;
      let countOfAStarReviews = [];
      countOfAStarReviews = starRatings.filter(starRating=>{ return(starRating == index)})
      const countOfAStarReviewsPercentage = Math.trunc((countOfAStarReviews.length/(starRatings.length))*100)
      return (
        <div key={index} className="mb-3 ">
          <span className="progressLabel col-3 p-1">{index} star</span>
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