import mongoose from "mongoose";
const DatabaseConnection=async()=>{
    try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test")
    } catch (error) {
        console.log ("data conncetion faild",error)}
}