import SSLCommerzPayment from "sslcommerz-lts";
import Transaction from "../../../models/Transaction.js";
import { Types } from "mongoose";
import 'dotenv/config'

const store_id = 'datad65ceef48f39dc'
const store_passwd = 'datad65ceef48f39dc@ssl'
const is_live = false

const payment = async (req, res) => {

    const order = req.body
    // const tran_id = Types.ObjectId()
    // console.log(tran_id);

    const data = {
        event_id: order.eventId,
        total_amount: order.amount,
        currency: order.currency,
        tran_id: 'tran_id',
        success_url: `http://localhost:5173/payment/success`,
        fail_url: 'http://localhost:3030/fail',
        cancel_url: 'http://localhost:3030/cancel',
        ipn_url: 'http://localhost:3030/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: order.name,
        cus_email: order.email,
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };

    try {
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
        const apiResponse = await sslcz.init(data);

        // Save payment details to the database
        const payment = new Transaction({
            event_id: data.event_id,
            total_amount: data.total_amount,
            currency: data.currency,
            tran_id: data.tran_id,
            success_url: data.success_url,
            fail_url: data.fail_url,
            cancel_url: data.cancel_url,
            ipn_url: data.ipn_url,
            cus_name: data.cus_name,
            cus_email: data.cus_email,
            cus_address: data.cus_add1,
        });
        await payment.save();

        // Redirect the user to the payment gateway
        res.send({ url: apiResponse.GatewayPageURL });
        console.log('Redirecting to:', apiResponse);
    } catch (error) {
        console.error('Error initializing payment:', error);
        res.status(500).send('Error initializing payment');
    }
};

export default payment;