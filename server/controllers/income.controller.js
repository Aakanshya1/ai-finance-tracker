import Income from '../models/Income.js';
import Account from '../models/Account.js';


export const createIncome = async(req, res)=>{
    try {
        const {amount,category,date,description,accountId,}=req.body;
        const userId = req.user._id;
          if (!amount || !category || !accountId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const account = await Account.findOne({ _id: accountId, userId });
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
        const income = new Income({
            userId,
            amount,
            category,
            date,
            description,
            account:accountId
        });
        await income.save();
        res.status(201).json(income);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getIncomes = async(req,res)=>{
    try {
        const userId = req.user._id;
        const incomes = await Income.find({userId}).populate("account").sort({date: -1});
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const updateIncome = async(req,res)=>{
    try {
        const {_id}=req.params;
        const {amount,category,date,description,accountId}=req.body;
        const userId = req.user._id;
        const income = await Income.findOne({_id,userId});
        if(!income){
            return res.status(404).json({message: "Income record not found"});
        }
        income.amount = amount || income.amount;
        income.category = category || income.category;
        income.date = date || income.date;
        income.description = description || income.description;
        income.account = accountId || income.account;
        const updatedIncome = await income.save();
        res.status(200).json({
            message: "Income record updated successfully",
            income: updatedIncome
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const deleteIncome = async(req,res)=>{
    try {
        const {_id} = req.params;
        const userId = req.user._id;
        const income = await Income.findOneAndDelete({_id,userId});
        if(!income){
            return res.status(404).json({message: "Income record not found"});
        }
        res.status(200).json({message: "Income record deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}