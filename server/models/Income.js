import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true, 
    },
    accountId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    category:{
        type: String,
        required: true,
        trim: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    description:{
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},{timestamps:true});

const Income = mongoose.model("Income", incomeSchema);
export default Income;
