import Transaction from "../../../models/Transaction.js";

const findAll = async (req, res) => {
    try {
        const result = await Transaction.find({ paidStatus: true });
        res.send(result)
    } catch (error) {
        return res.send(error);
    }
}

export default findAll;