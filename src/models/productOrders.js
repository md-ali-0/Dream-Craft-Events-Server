import { model, Schema } from "mongoose";

const ProductOrdersSchema = new Schema(
    {
        "user_id": {
            type: String,
            required: true
        },
        "user_name": {
            type: String,
            required: true
        },
        "user_image": { type: String, required: true, 
          default: 'https://i.ibb.co/s6CHS24/profile3.png'
      },
        "user_email": {
            type: String,
            required: true
        },
        "product_id": {
            type: String,
            // required: true
        },
        'product_image': { type: String, required: true, 
          default: 'https://placehold.co/650x400/png'
      },
        "product_name": {
            type: String,
            required: true
        },
        "product_description": {
            type: String,
            required: true
        },
        "product_price": {
            type: String,
            required: true
        },
        "status": {
            type: String,
            require: true
        },
    },
    { versionKey: false }
)


const productOrders = model("product-orders", ProductOrdersSchema)

export default productOrders