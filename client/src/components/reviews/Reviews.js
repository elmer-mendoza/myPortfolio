import React, {useEffect} from 'react';
// import {Container,div,div, Progress} from 'reactstrap';
import ReviewChart from './ReviewChart';
import SubmitReviewForm from './SubmitReviewForm'
// import ReviewsModal from './ReviewsModal'
// import {connect} from 'react-redux';
// import { fetchReviews } from '../redux/ActionsCreator';
// import Loading from "./Loading";
import './css/reviews.css'



const Reviews = (props) => {
//   useEffect(()=>{
//      props.fetchReviews();
//  },[]);

//  const ratings = props.reviews.map(review => { return( review.numStar)})
 const starRatings = [4,4,3,5,4]
 const aveRating = starRatings.reduce((a,b)=> (+a)+(+b))/(starRatings.length);




//  if(props.loading){ return <Loading/> } 

 return (
    <div className='review'>
        <h2 className='review__title'>Reviews</h2>
        <div className="mx-auto px-auto review__container">
            <ReviewChart starRatings={starRatings} aveRating={aveRating}/>
            <SubmitReviewForm/>
        </div>
    </div>
 )
}

export default Reviews