import "dotenv/config";
import jwt from "jsonwebtoken";
import User from "../../../models/Users.js";

const authVerify = async(req, res) => {
    if (!req.body.token) {
        return res.status(401).send({message: 'unAuthorized ss access'})
    }
    const token = req.body.token
    try {
        const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN)
        if (decoded) {
            const email = decoded.email
            const query = {
                email:email
            }
            const reqUser = await User.findOne(query)
            res.send(reqUser)
        } else{
            res.status(401).send({ message: "unauthorized access" });
        }
    } catch (err) {
        return res.status(401).send({ message: "unauthorized access" });
    }
};

export default authVerify