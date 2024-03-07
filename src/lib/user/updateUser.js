import User from "../../models/Users.js";

const updateUser = async (filter, upData) => {
    
    try {
        const cursor = await User.findByIdAndUpdate(filter, upData);
        return cursor;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default updateUser;