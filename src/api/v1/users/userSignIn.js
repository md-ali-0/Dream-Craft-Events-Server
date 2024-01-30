import checkUserPass from "../../../lib/user/checkUserPass.js";

const userSignIn = async(req, res)=>{
    const user = req.body;
    try {
        const result = await checkUserPass(user)
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default userSignIn;