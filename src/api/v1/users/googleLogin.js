import "dotenv/config";
import jwt from "jsonwebtoken";
import addUser from "../../../lib/user/addUser.js";
import User from "../../../models/Users.js";

const googleLogin = async(req, res)=>{

    try {
        const query = {
            email:req.body.email
        }
        const reqUser = await User.findOne(query)
        
        if (!reqUser) {
            const result = await addUser(req.body)
            if (result) {
                const token = jwt.sign({email:result.email}, process.env.ACCESS_TOKEN, {
                    expiresIn: "1h",
                });
                const data = {
                    user: result,
                    token
                }
                return res.send(data)
            }
            else{
                return res.send(result)
            }
        } else {
            const token = jwt.sign({email:reqUser.email}, process.env.ACCESS_TOKEN, {
                expiresIn: "1h",
            });
            const data = {
                user: reqUser,
                token
            }
            return res.send(data)
        }

    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default googleLogin