import findAllUsers from "../../../lib/user/findAllUsers.js";

const allUsers = async (req, res)=>{
    let query = {
        role: 'user'
    }
    const filter = req.query
    if (filter?.id) {
        query._id = filter.id
    }
    
    try {
        const result = await findAllUsers(query)
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default allUsers