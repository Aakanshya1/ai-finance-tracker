import Expense from '../models/Expense.js'
import Account from '../models/Account.js'

export const  createExpense = async(req,res)=>{
    try {
        const {amount,category,date,description,accountId}=req.body;
        const userId = req.user._id;
        if(!amount || !category || accountId){
            return res.status(400).json({
                message:"Missing required fields"
            })
        }
        const account = await Account.findOne({_id:accountId,userId});
        if(!account){
            return res.status(404)
            .json({
                message:"Account not found"
            })
        }
        const expense = new Expense({
             userId,
            amount,
            category,
            date,
            description,
            account:accountId
        });
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

export const getExpenses = async(req,res)=>{
    try{
        const userId = req.user._id;
        const expenses = (await Expense.find({userId}).populate("account")).toSorted({date:-1});
        res.status(200).json(expenses);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

export const updateExpense = async(req, res)=>{
    try {
        const {_id}= req.params;
         const {amount,category,date,description,accountId}=req.body;
        const userId = req.user._id;
        const expense = await Expense.findOne({_id,userId});
        if(!expense){
            return res.status(404).json({message: "Income record not found"});
        }
        expense.amount = amount || expense.amount;
        expense.category = category || expense.category;
        expense.date = date || expense.date;
        expense.description = description || expense.description;
        expense.account = accountId || expense.account;
        const updatedExpense = await expense.save();
        res.status(200).json({
            message: "Income record updated successfully",
            expense:updatedExpense
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deleteExpense = async(req,res)=>{
    try {
        const {_id}=req.params;
        const userId = req.user._id;
        const expense = await Expense.findOneAndDelete({_id,userId});
        if(!expense){
             return res.status(404).json({message: "Expense record not found"});
        }
        res.status(200).json({
            message:"Expense record deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}