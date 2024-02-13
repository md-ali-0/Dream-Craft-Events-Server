import updateUser from "../../../lib/user/updateUser.js";

const editUser = async (req, res) => {
    const upData = req.body;
    const filter = {
        _id: req.params.id,
    };
    console.log(upData);
    try {
        const result = await updateUser(filter, upData);
        res.send(result);
    } catch (error) {
        return res.status(error?.status || 500).send(error.message);
    }
};

export default editUser;
