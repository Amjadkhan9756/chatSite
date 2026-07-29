import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userRegister = async (req, res) => {
    //username , email ,password ,name =value 
    //then verifi 
    //password hashing 
    // new user creating ,
    // token 
    // final response 
    try {
        const { name, username, email, password } = req.body;
        if (!name || !email || !username || !password) {
            return res.status(404).json({ message: "all feild are required " });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "user not found " });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword
        });
        newUser.save()
            .then((user) => {
            res.status(201).json({ message: "User created successfully", user });
        });
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1day" });
        res.status(200).json({ message: "User created successfully", token });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
const userLogin = async (req, res) => {
    // taking email,password from body 
    //verified them 
    //finding user by email 
    // finding the user by password 
    // generating token
    //
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).json({ message: "user not found" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(404).json({ message: "user not found" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1day" });
        res.status(200).json({ message: "User logged in successfully", token });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
const userLogout = async (req, res) => {
    // clearing the token from the client side 
    // sending response 
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "User logged out successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export { userRegister, userLogin, userLogout };
