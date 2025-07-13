const express=require("express")
const app=express();
const PORT=process.env.PORT || 9000;
const connectDb=require("./config/connectDb")
require("dotenv").config();
const mainRouter=require("./routes/index")

connectDb();

app.use(express.json())
app.use("/api",mainRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})