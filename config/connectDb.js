const mongoose=require("mongoose")

const connectDb=async()=>{
try{
await mongoose.connect(process.env.MONGO_URI)
console.log(`MongoDb Connected Successfully!`)
}
catch(err){
    console.log(err)
}
}

module.exports=connectDb