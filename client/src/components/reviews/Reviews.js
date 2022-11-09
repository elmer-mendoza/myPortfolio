import React, {useEffect} from 'react';
import {useQuery} from '@apollo/client'
import {GET_NUMSTARS, GET_REVIEWS} from '../graphql/query.js'
// import {Container,div,div, Progress} from 'reactstrap';
import ReviewChart from './ReviewChart';
import SubmitReviewForm from './SubmitReviewForm'
// import ReviewsModal from './ReviewsModal'
// import {connect} from 'react-redux';
// import { fetchReviews } from '../redux/ActionsCreator';
import Loading from "../loading//Loading";
import './css/reviews.css'


const Reviews = () => {


 return (
    <div className='review sectionContainer'>
        <h2 className='sectionTitle'>Reviews</h2>
        <div className="mx-auto px-auto review__container">
            <ReviewChart />
            <SubmitReviewForm/>
        </div>
    </div>
 )
}

export default Reviews