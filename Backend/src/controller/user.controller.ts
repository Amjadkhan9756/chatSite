import User from "../models/User.model.js";

export const getUsersForSidebar = async (req: Request, res: Response) => { 
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUser } }).select(
      "_id fullName userName profilePic gender"
    );  


    res.status().json({
      filteredUsers,
      loggedInUser:req.user,
      message:"All  friends are here "
    });

  } catch(error:any) {  
    return res.status(500).json({ message: "Error fetching users", error: error.message })  
  }
}