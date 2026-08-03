import Group from "../models/group.model";
import { Request, Response } from "express";
import User from "../models/User.model.js";


const groupController = async (req: Request, res: Response) => {
    try {
        const { name, description, groupAdmin, members } = req.body;
        members.push({
            _id: req.User._id,
            fullName: req.User.fullName,
            name: req.User.name,
            username: req.User.username,
            gender: req.User.gender,
            profilePic: req.User.profilePic,
        })

        const newGroup = new Group({
            name,
            description: description || " ",
            groupAdmin,
            members: req.User;
        });

        newGroup.save()

        res.status(201).json({ message: "Group created successfully", newGroup });


    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


const getGroupsForSidebar = async (req: Request, res: Response) => {
    try{
        const group = await Group.find({members:req.User._id}).select(
            "_id name description profilePic groupAdmin members"
        );
        res.status(200).json({ message: "Groups fetched successfully", group });

    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}




export default { groupController, getGroupsForSidebar };