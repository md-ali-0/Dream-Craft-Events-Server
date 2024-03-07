import productOrders from "../../models/productOrders.js";
const userAllOrders = async(email) => {
    try {
        const cursor = await productOrders.find({user_email: email })    
        return cursor
    } catch(err) {
        throw new Error(err)
    }
}


export default userAllOrders;