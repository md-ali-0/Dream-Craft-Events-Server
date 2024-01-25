import addUser from "../../../lib/user/addUser.js"

const userSignUp = async(req, res)=>{
    const user = req.body
    try {
        const result = await addUser(user)
        res.send(result)
    } catch (error) {
        return res.send({acknowledged: false,InsertedId: null})
    }
}

export default userSignUp