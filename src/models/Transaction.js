import { Schema, model } from "mongoose";

const transactionSchema = new Schema(
    {
        event_id: String,
        total_amount: Number,
        currency: String,
        tran_id: String,
        success_url: String,
        fail_url: String,
        cancel_url: String,
        ipn_url: String,
        cus_name: String,
        cus_email: String,
        cus_address: String,
    },
    { versionKey: false }
);

const Transaction = model('transaction', transactionSchema);

export default Transaction;