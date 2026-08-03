import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId:{
        type:String,
        required:true

    },
    receiverId:{
        type:String,
        require:true

    },
    message:{
        type:String,
        require:true

    },
    type:{
        type:String,
        default:"text"

    }
},{
    timestamps:true
})

const Message = mongoose.model("Message",messageSchema);
export default Message;