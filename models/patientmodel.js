const mongoose=require("mongoose")

const patientschema=new mongoose.Schema(
    {
        name:String,
        mobilenumber:String,
        symptoms:String
    }
)

module.exports=mongoose.model("patient",patientschema)