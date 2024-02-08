import "dotenv/config";
import jwt from "jsonwebtoken";
import User from "../../models/Users.js";
import { bcHashCompare } from "../../utils/bcrypt.js";

const checkUserPass = async(user)=>{

    const email = user.email;
    const planePassword = user.password
    try{
        const query = {
            email:email
        }
        
        const reqUser = await User.findOne(query)

        if (!reqUser) {
            const error = new Error('User not found')
            error.status = 404
            throw error
        }

        const cursor = await bcHashCompare(planePassword, reqUser.password)
        if (cursor) {
            const token = jwt.sign({email:reqUser.email}, process.env.ACCESS_TOKEN, {
                expiresIn: "1h",
            });
            const result = {
                user: reqUser,
                token
            }
            return result
        } else{
            const error = new Error('Password is Wrong')
            error.status = 401
            throw error
        }

    } catch(err){
        throw new Error(err)
    }
}

export default checkUserPass