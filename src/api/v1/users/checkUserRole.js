import findUserRole from "../../../lib/user/findUserRole.js";


const checkUserRole = async (req, res) => {
    const email = req.params.email
    try {
        const result = await findUserRole(email)
        res.send(result)
    } catch (error) {
        console.log(error);
        throw error
    }
};

export default checkUserRole;