import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const registerUser = async (req,res)=>{
    try {
        const {name,email,password,confirmPassword}=req.body;
        const existingUser= await User.findOne({email});
        if(existingUser){
            return res.status(400)
            .json({
                message:"User already exists"
            })
        }
        if(password!==confirmPassword){
            return res.status(400)
            .json({
                message:"Passwords do not match"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new User({
            name,
            email,
            password:hashedPassword,
        })
        await newUser.save();
        return res.status(200)
        .json({
            message:"User registered successfully"
        })

    } catch (error) {
        return res.status(500)
        .json({
            message:"Server error",error:error.message
        })
    }
}

export const loginUser = async(req,res)=>{
    try {
        const {email,password}=req.body;

        const user = await User.findOne({email}).select("+password");;
        if(!user){
            return res.status(400)
            .json({
                message: "Invalid email"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400)
            .json({
                message:"Invalid password"
            })
        }
        const jwtToken = jwt.sign({
            id:user._id,email:user.email,name:user.name 
        },
        process.env.JWT_SECRET,
        {expiresIn:'5h'}
        )
    res.status(200)
    .json({
        message:"Login successful",
        token:jwtToken,
        name:user.name
    })
    } catch (error) {
        return res.status(500)
        .json({
            message:"Server error",error:error.message,
        })
  
    }
}
