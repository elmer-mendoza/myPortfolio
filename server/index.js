import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {graphqlHTTP} from 'express-graphql'

import connectDB from './config/connectDB.js'
import schema from './graphQLSchema/reviewGraphQLSchema.js'



const app = express();
dotenv.config();

const port = process.env.PORT || 4000;


// app.use(cors({
//   origin: [
//     "https://studio.apollographql.com",
//     "http://localhost:8081",
//     "http://localhost:8080",
//     "http://localhost:8000",
// ],
//   credentials: true
// }));
app.use(cors())



app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  }),
);
app.listen(port,()=>{
 
  connectDB()
  
  console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`)
});
