import User from "../../models/Users.js";

const findAllUsers = async (query) => {
    try {
        const cursor = await User.find(query)
        return cursor
    } catch (error) {
        console.log(error)
        throw error
    }
};

export default findAllUsers;