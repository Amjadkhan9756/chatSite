import mongoose from "mongoose";


const groupSchema = new mongoose.Schema({
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    profilePic: {
        type: String,
        default: `https://avatar.iran.liara.run/public/boy?username=${Math.ceil(
            Math.random() * 100
        )}`,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        index: true

    },
    description: {
        type: String,
        trim: true,
        index: true

    },
    numbers: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"

    }

},
    { timestamps: true }

);

const Group = mongoose.model("Group", groupSchema);
export default Group;