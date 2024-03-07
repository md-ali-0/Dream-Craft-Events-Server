import SSLCommerzPayment from "sslcommerz-lts";
import Transaction from "../../../models/Transaction.js";
import { Types } from "mongoose";
import 'dotenv/config'

const store_id = 'datad65ceef48f39dc'
const store_passwd = 'datad65ceef48f39dc@ssl'
const is_live = false

const payment = async (req, res) => {

    const order = req.body
    const tran_id = new Types.ObjectId().toHexString()

    const data = {
        event_id: order.eventId,
        event_image: order.eventImage,
        event_date: order.eventDate,
        total_amount: order.amount,
        currency: order.currency,
        tran_id: tran_id,
        success_url: `https://dream-craft-server.vercel.app/payment/success/${tran_id}`,
        // success_url: `http://localhost:8080/payment/success/${tran_id}`,
        fail_url: `https://dream-craft-server.vercel.app/payment/fail/${tran_id}`,
        cancel_url: 'https://dream-craft-event.web.app/',

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
        eventTitle: order.eventTitle,
    };

    try {
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
        const apiResponse = await sslcz.init(data);

        // Redirect the user to the payment gateway
        res.send({ url: apiResponse.GatewayPageURL });

        // Save payment details to the database
        const payment = new Transaction({
            event_id: data.event_id,
            eventImage: data.event_image,
            eventTitle: data.eventTitle,
            eventDate: data.event_date,
            total_amount: data.total_amount,
            currency: data.currency,
            tran_id: data.tran_id,
            cus_name: data.cus_name,
            cus_email: data.cus_email,
            cus_address: data.cus_add1,
            paidStatus: false
        });

        await payment.save();

        // console.log('Redirecting to:', apiResponse);

    } catch (error) {
        console.error('Error initializing payment:', error);
        res.status(500).send('Error initializing payment');
    }
};

export default payment;