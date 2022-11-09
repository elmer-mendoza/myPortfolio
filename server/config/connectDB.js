import mongoose from "mongoose";

const connectDB =async()=>{
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      ()=>console.log("connected to mongoDB"),
      {useNewUrlParser:true, useUnifiedTopology: true}
     )
     
      mongoose.connection.on('disconnected',()=>{ console.log('mongoDB disconnected')})
  } catch (error) {
      throw(error)
  }
  
}

export default connectDB