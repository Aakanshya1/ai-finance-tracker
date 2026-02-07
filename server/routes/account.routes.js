import { createAccount,deleteAccount,getAccounts } from "../controllers/account.controller.js";
import express from "express";

const router = express.Router();
import { authMiddleware } from "../middlewares/auth.middleware.js";

router.post("/addaccount", authMiddleware, createAccount);
router.get("/getaccount", authMiddleware, getAccounts);
router.delete("/deleteaccount/:id", authMiddleware, deleteAccount);

export default router;