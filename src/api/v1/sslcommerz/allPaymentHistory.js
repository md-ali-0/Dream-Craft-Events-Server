import getAllPaymentHistory from "../../../lib/payment/getAllPaymentHistory.js";


const allPaymentHistory = async(req, res) => {
    const email = req.params.email;
    try {
        const result = await getAllPaymentHistory(email)
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

export default allPaymentHistory;