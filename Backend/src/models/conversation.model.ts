import mongoose from "mongoose";
import { StringDecoder } from "node:string_decoder";


const conversationSchema = new mongoose.Schema({
    participants: {

        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    messages: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
        default:[]

    },
    openMessages:{

        type:String,
        default:[],
    },

},
{ timestamps: true });


const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
