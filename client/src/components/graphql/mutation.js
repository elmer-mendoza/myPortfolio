import {gql} from '@apollo/client'

export const ADD_REVIEW = gql`
mutation addReview(
  $name:String
  $comment:String
  $reviewerImage:String
  $numStar:Int
  ){
    addReview(
    name:$name
    comment:$comment
    reviewerImage:$reviewerImage
    numStar:$numStar
    ){
      name
      comment
      reviewerImage
      numStar
     }
  }
`