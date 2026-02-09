import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import authRoutes from './routes/auth.routes.js'
import connectDB from './config/db.js';
import accountRoutes from './routes/account.routes.js';
import incomeRoutes from './routes/income.routes.js';
import expenseRoutes from './routes/expense.routes.js'
const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/income', incomeRoutes);
app.use('/account', accountRoutes);
app.use('/expense',expenseRoutes);
app.get('/', (req,res)=>{
    res.send("API is running...")
})
connectDB();
const port = process.env.PORT; 
app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});
export default app;