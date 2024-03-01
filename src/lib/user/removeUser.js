import User from "../../models/Users.js";

const removeUser = async (id) => {
    try {
        const cursor = await User.findByIdAndDelete({ _id: id });
        return cursor;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default removeUser;
