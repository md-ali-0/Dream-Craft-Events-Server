import User from "../../models/Users.js"
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
            return {massage:'User not found'}
        }

        const cursor = await bcHashCompare(planePassword, reqUser.password)
        if (cursor) {
            // return {massage:'success',...reqUser._doc}
            return {massage:'success',name:reqUser.name, email:reqUser.email, image:reqUser.image,createdAt:reqUser.createdAt}
        } else{
            return {massage:'Password is Wrong'}
        }

    } catch(err){
        throw new Error(err)
    }
}

export default checkUserPass