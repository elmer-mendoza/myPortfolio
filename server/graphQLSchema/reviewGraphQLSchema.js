import Review from '../models/ReviewSchema.js';
import graphql from 'graphql'

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLInt,
  GraphQLDateTime,
  GraphQLScalarType,
  Kind
} = graphql


// const DateTime =new GraphQLScalarType({
//   name: DateTime,
//   description: "DateTime scalar type",
//   parseValue(value){
//     return new Date(value)
//   },
//   parseLiteral(ast){
//     if(ast.kind === KIND.INT){
//       return parseInt(ast.value,10)
//     }
//     return null
//   },
//   serialize(value){
//     const date = new Date(value)
//     return date.toISOString()
//     // return value
//   }
// })

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'Date custom scalar type',
  serialize(value) {
    return value; // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});


// Review Type

const ReviewType = new GraphQLObjectType({
  name: 'Review',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    comment: { type: GraphQLString },
    reviewerImage: { type: GraphQLString },
    numStar: {type: GraphQLInt},
    date:{type:DateTime},
  }),
});

// Query

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    reviews: {
      type: new GraphQLList(ReviewType),
      resolve(parent, args) {
        return Review.find();
      }
    }
  }
});

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Add a review
    addReview: {
      type: ReviewType,
      args: {
        name: { type:  new GraphQLNonNull(GraphQLString) },
        comment: { type: new GraphQLNonNull(GraphQLString) },
        reviewerImage: { type: new GraphQLNonNull(GraphQLString) },
        numStar: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        console.log(args)
        const review = new Review({
          name: args.name,
          comment: args.comment,
          reviewerImage: args.reviewerImage,
          numStar: args.numStar
        });
        return review.save();
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation,
});

export default schema