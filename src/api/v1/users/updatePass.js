import updateUser from "../../../lib/user/updateUser.js";
import { bcHashGen } from "../../../utils/bcrypt.js";

const updatePass = async (req, res) => {
    const filter = {
        _id: req.params.id,
    };
    const upData = req.body;
    const planePassword = upData.password
    const hashPassword = await bcHashGen(planePassword)
    upData.password = hashPassword
    try {
        const result = await updateUser(filter, upData);
        res.send(result);
    } catch (error) {
        return res.status(error?.status || 500).send(error.message);
    }
};

export default updatePass;
