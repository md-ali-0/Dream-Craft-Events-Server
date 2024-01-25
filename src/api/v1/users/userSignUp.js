import addUser from "../../../lib/user/addUser.js"
import { bcHashGen } from "../../../utils/bcrypt.js"

const userSignUp = async(req, res)=>{
    const planePassword = req.body.password
    const password = await bcHashGen(planePassword)
    let user = {...req.body}
    user.password = password
    try {
        const result = await addUser(user)
        res.send(result)
    } catch (error) {
        return res.send({acknowledged: false,InsertedId: null,error})
    }
}

export default userSignUp