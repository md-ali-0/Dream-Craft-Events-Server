import { Schema, model } from "mongoose";

const PaymentSchema = new Schema(
    {
        'orderId': {type: String, required: true},
        'tranId': {type: String, required: true},
        'price': {type: Number, required: true},
        'title': {type: String, required: true},
        'location' : {type: String, required: true},
        'date': {type: Date, required: true},
        'email': {type: String, required: true}
    },
    {versionKey: false}
)
const Payment = model('payments', PaymentSchema)

export default Payment;