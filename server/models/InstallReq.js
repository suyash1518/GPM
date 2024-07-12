import mongoose from "mongoose";


const InstallReqSchema = new mongoose.Schema({  //var
   /* id: {
        type: String,
        require: true,
    },*/
    name: {
        type: String,
        require: true
    },
    designation: {
        type: String,
        require: true,

    },
    purpose: {
        type: String,
        require: true,

    },
    department: {
        type: String,
        require: true
    },
    mentor: {
        type: String,
        require: true
    },
    Status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'], // Example status options
        default: 'pending' // Default status
    },
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})



const InstallReqModel = mongoose.model("InstallReq", InstallReqSchema);
export { InstallReqModel }

