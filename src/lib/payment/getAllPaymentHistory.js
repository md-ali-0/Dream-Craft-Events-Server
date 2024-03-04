import Transaction from "../../models/Transaction.js";



const getAllPaymentHistory = async(email) => {
    try {
        const cursor = await Transaction.find({ cus_email: email })
        return cursor
    } catch(err) {
        throw new Error(err)
    }
}


export default getAllPaymentHistory;