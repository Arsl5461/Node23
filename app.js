const express=require("express")
const app=express();
const PORT=process.env.PORT || 9000;
const connectDb=require("./config/connectDb")
require("dotenv").config();
const mainRouter=require("./routes/index")
const cors=require("cors")

connectDb();

app.use(express.json())
app.use(cors())
app.use("/api",mainRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})