import Transaction from "../../../models/Transaction.js";

const transId = async (req, res) => {

    console.log(req.params.tranId);
    const { tranId } = req.params;

    try {
        const updatedTransaction = await Transaction.findOneAndUpdate(
            { tran_id: tranId },
            { paidStatus: true },
            { new: true }
        );

        if (updatedTransaction) {
            res.redirect(`https://dream-craft-event.web.app/payment/success/${tranId}`);
            // res.redirect(`http://localhost:5173/payment/success/${tranId}`);
        }
    } catch (error) {
        console.error("Error updating transaction:", error);
    }
}
export default transId;