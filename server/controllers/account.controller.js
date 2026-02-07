import Account from "../models/Account.js";

export const createAccount = async(req,res)=>{
    try{
        const {accountType,accountName}=req.body;
        const userId = req.user._id;
        if(accountType == "Cash"){
            const existingCashAccount = await Account.findOne({userId, accountType: "Cash"});
            if(existingCashAccount){
                return res.status(400).json({message: "A Cash account already exists for this user."});
            }
        }
        const duplicate = await Account.findOne({userId, accountName,accountType});
        if(duplicate){
            return res.status(400).json({message: "An account with this name and type already exists for this user."});
        }
        const newAccount  = new Account({
            userId,
            accountType,
            accountName
        });
        await newAccount.save();
        res.status(201).json({message: "Account created successfully", account: newAccount});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const getAccounts = async(req, res)=>{
    try {
        const userId = req.user._id;
        const accounts = await Account.find({userId}).sort({accountName: 1});
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({
            message:"Failed to fetch accounts",error: error.message
        })
    }
}
export const deleteAccount = async(req,res)=>{
    try {
        const userId = req.user._id;
        const accountId = req.params.id;
        const account = await Account.findOne({_id: accountId, userId});
        if(!account){
            return res.status(404).json({message: "Account not found"});
        }
        await Account.deleteOne({_id: accountId, userId});
        res.status(200).json({message: "Account deleted successfully"});
    } catch (error) {
        res.status(500).json({
            message:"Failed to delete account",error: error.message
        })
    }
}