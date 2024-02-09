import User from "../../models/Users.js";

const findUserRole = async (email) => {
    try {
        const query = {
            email:email
        }
        const projection = {
            _id:0,
            role: 1
        }
        const cursor = await User.findOne(query).select(projection)
        return cursor
    } catch (error) {
        console.log(error)
        throw error
    }
};

export default findUserRole;