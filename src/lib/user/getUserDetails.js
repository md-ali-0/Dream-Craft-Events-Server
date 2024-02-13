import User from "../../models/Users.js";

const getUserDetails = async (id) => {
    try {
        const cursor = await User.findById(id)
        return cursor
    } catch (error) {
        console.log(error)
        throw error
    }
};

export default getUserDetails;