import checkUserPass from "../../../lib/user/checkUserPass.js";
import { bcHashCompare } from "../../../utils/bcrypt.js"

const userSignIn = async(req, res)=>{
    const user = req.body;
    try {
        const result = await checkUserPass(user)
        res.send(result)
    } catch (error) {
        return res.send({acknowledged: false,InsertedId: null, error})
    }
}

export default userSignIn;