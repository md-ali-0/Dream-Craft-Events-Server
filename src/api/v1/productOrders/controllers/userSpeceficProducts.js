import userAllOrders from "../../../../lib/productOrders/userAllOrders.js";

const userSpeceficProducts = async(req, res) => {
    const email = req.params.email;
    try {
        const result = await userAllOrders(email)
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

export default userSpeceficProducts;
