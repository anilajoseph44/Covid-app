const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const patientroute=require("./controllers/patientroute")


const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://anilasandrajose01:sandrajoseph99@cluster0.vpgykyq.mongodb.net/patientDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/patient",patientroute)

app.listen(3001,()=>{
    console.log("server running")
})