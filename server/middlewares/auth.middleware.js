import jwt from "jsonwebtoken";
import User from "../models/User.js";


const authMiddleware = async(req,res,next)=>{
    const authHeader= req.headers['authorization'];
    if(!authHeader){
        return res.status(401)
        .json({
            message:"No token is provided"
        })
    }

    const token = authHeader.split(' ')[1];
    if(!token){ 
        return res.status(403)
        .json({
            message:"Unauthorized token, access denied"
        })
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        return res.status(401)
        .json({
            message:"Invalid token"
        })
    }
}
export default authMiddleware;