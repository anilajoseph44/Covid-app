const express=require("express")

const patientmodel=require("../models/patientmodel")
const router=express.Router()

router.post("/add",async(req,res)=>{

    let data=req.body
    let patient=new patientmodel(data)
    let response=await patient.save()
    res.json(
        {
            status:"success"
        }
    )

})

module.exports=router