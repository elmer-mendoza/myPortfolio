import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema

const ReviewSchema = new Schema({
    numStar: {
        type: Number
    },
    comment: {
        type: String,
    },
    name: {
        type: String,
     },
   
    reviewerImage:{
        type: String,
    },
     
     date: {
         type: Date,
         default: Date.now
     }
});

const Review =mongoose.model('Review',ReviewSchema);

export default Review