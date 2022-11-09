import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody,Form,Label,Input} from 'reactstrap';
import { GET_REVIEWS } from '../graphql/query';
import {useQuery} from '@apollo/client'
import FilteredReviews from './FilteredReviews';
import Loading from "../loading//Loading";

const SortReviewsHeader =({numStar,sortDate})=> {
  const options = [...Array(5)].map((_,index)=>{
              let i = index +=1
              return (
                <option>{i}</option>
                )
            });
  return (
      <Form >
          <Label className="ml-3" for="numStar">No of stars
            <Input type="select" name="numStar" id="numStar" onChange={numStar} >
                <option>All</option> 
                {options}           
            </Input>
          </Label>
          <Label className="ml-3" for="sortDate">Date
            <Input type="select" name="sortDate" id="sortDate" onChange={sortDate} >
              <option disabled>Sort</option>
              <option>Latest</option>
              <option>Earliest</option>
          </Input>
          </Label>
      </Form>
);
}

const ReviewsModal = () => {

  const {error,loading,data} = useQuery(GET_REVIEWS)


  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [filteredReviews,setFilteredReviews] = useState();

  if(loading){ return <Loading/> } 
  if(error){console.log(error)}
  const {reviews} =data
 

  const sortDate =(e)=> {
     if (e.target.value === "Earliest") {
      console.log("filtered",filteredReviews)
      const sortedDate=[...filteredReviews].sort((a,b)=> a.date<b.date ? -1:1);
      console.log(sortedDate)
      return setFilteredReviews([...sortedDate]);
    }
    if (e.target.value === "Latest") {
      const sortedDate=[...filteredReviews].sort((a,b)=>a.date>b.date ? -1:1);
      return setFilteredReviews([...sortedDate]);
    }  
  }
  
  const numStar =  (e) => {
     if (e.target.value === "All") {
      setFilteredReviews(reviews);
     }
    else{
      let filterReviews = reviews.filter(review => review.numStar == e.target.value)
      setFilteredReviews(filterReviews);
    }
  }

 const handleDisplayReview = ()=> {
  //  props.fetchReviews()
  toggle();
  setFilteredReviews(reviews)
  console.log(filteredReviews)

 }

  return (
    <div>
      <button className="seeReviewBtn" onClick={handleDisplayReview}>see reviews</button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader className="fixed-top bg-light" toggle={toggle} >
          <SortReviewsHeader sortDate={sortDate} numStar={numStar} />
        </ModalHeader>
        <ModalBody className="mt-5 " style={{paddingTop: 100}} >
          <FilteredReviews  filteredReviews={filteredReviews}/>
        </ModalBody>
       </Modal>
    </div>
  );
}

export default ReviewsModal