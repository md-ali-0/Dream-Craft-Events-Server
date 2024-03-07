import "dotenv/config";
import jwt from "jsonwebtoken";
import addUser from "../../../lib/user/addUser.js";
import { bcHashGen } from "../../../utils/bcrypt.js";

const userSignUp = async(req, res)=>{
    const planePassword = req.body.password
    const hashPassword = await bcHashGen(planePassword)
    let user = {...req.body}
    user.password = hashPassword
    try {
        const result = await addUser(user)
        if (result) {
            const token = jwt.sign({email:result.email}, process.env.ACCESS_TOKEN, {
                expiresIn: "1h",
            });
            const data = {
                user: result,
                token
            }
            res.send(data)
        }
        else{
            res.send(result)
        }
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default userSignUp