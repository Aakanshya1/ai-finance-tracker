import { createIncome,getIncomes,updateIncome,deleteIncome} from "../controllers/income.controller.js";
import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/addincome", authMiddleware, createIncome);
router.put("/updateincome/:_id", authMiddleware, updateIncome);
router.delete("/deleteincome/:_id", authMiddleware, deleteIncome);
router.get("/getincome", authMiddleware, getIncomes);


export default router;