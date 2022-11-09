import {gql} from '@apollo/client'

export const GET_REVIEWS = gql`
query  {
  reviews{
    id
    name
    comment
    numStar
    reviewerImage
    date
  }
}
`
export const GET_NUMSTARS = gql`
query  {
  reviews{
    numStar
  }
}
`