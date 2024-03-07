import Transaction from "../../../models/Transaction.js";

const paymentFail = async (req, res) => {
    const transId = req.params.tranId

    try {
        const result = await Transaction.deleteOne({ tran_id: transId })
        if (result.deletedCount) {
            res.redirect(`https://dream-craft-event.web.app/payment/fail/${transId}`);
            // res.redirect(`http://localhost:5173/payment/fail/${transId}`);
        };
    } catch (error) {
        console.error("Error deleting document:", error);
    }
}

export default paymentFail;