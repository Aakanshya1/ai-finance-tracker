import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    account:{
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

const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;