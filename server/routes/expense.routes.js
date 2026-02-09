import { createExpense,getExpenses,updateExpense,deleteExpense } from "../controllers/expense.controller.js";
import express from 'express';
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { updateIncome } from "../controllers/income.controller";
const router = express.Router();


router.post('/addexpense',authMiddleware,createExpense);
router.put('/updateexpense/:_id',authMiddleware,updateExpense);
router.delete('/deleteexpense/:_id',authMiddleware,deleteExpense);
router.get('/getincome',authMiddleware,getExpenses);

export default router;