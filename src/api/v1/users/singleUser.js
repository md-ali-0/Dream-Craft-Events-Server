import getUserDetails from "../../../lib/user/getUserDetails.js"

const singleUser = async (req, res)=>{
    const id = req.params.id    
    try {
        const result = await getUserDetails(id)
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
} 

export default singleUser