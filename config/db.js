import mongoose from 'mongoose';
 export const dbConnect=async()=>{
  const conn=await mongoose.connect('mongodb+srv://sizu4292_db_user:ls0LtiveEgxOpxDp@cluster0.guhepl3.mongodb.net/?appName=Cluster0');
  if(conn){
    console.log("database has connected successfully....")
  }
} 