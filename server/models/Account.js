import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
        required: true,
    },
    accountType: {
        type: String,
        enum: ["cash", "bank", "mobile"],
        required: true,
    },
    accountName:{
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},{timestamps:true});

const Account = mongoose.model("Account", accountSchema);
export default Account;