import { Schema, Types, model } from "mongoose";

const transactionSchema = new Schema(
    {
        event_id: String,
        eventImage: String,
        eventTitle: String,
        eventDate: Date,
        total_amount: Number,
        currency: String,
        'tran_id': { type: String, require: true },
        cus_name: String,
        cus_email: String,
        cus_address: String,
        paidStatus: { type: Boolean, default: false }
    },
    { versionKey: false }
);

const Transaction = model('transaction', transactionSchema);

export default Transaction;