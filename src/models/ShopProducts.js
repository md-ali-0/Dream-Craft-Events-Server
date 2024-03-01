import { Schema, model, SchemaTypes } from "mongoose";

const ShopProductSchema = new Schema(
    {
        id: { type: SchemaTypes.Mixed },
        product_image: { type: SchemaTypes.Mixed, required: true, 
            default: 'https://placehold.co/650x400/png'
        },
        product_name: { type: SchemaTypes.Mixed, required: true },
        product_description: { type: SchemaTypes.Mixed, required: true },
        product_price: { type: SchemaTypes.Mixed, required: true },
    },
    { versionKey: false }
);

const ShopProducts = model('shops', ShopProductSchema);

export default ShopProducts;



// import { Schema, model } from "mongoose";

// const ShopProductSchema = new Schema(
//     {
//         'id': { type: Number,  },
//         'product_image': { type: String, required: true, 
//             default: 'https://placehold.co/650x400/png'
//         },
//         'product_name': { type: String, required: true },
//         'product_description': { type: String, required: true },
//         'product_price': { type: Number, required: true },
//     },
//     { versionKey: false }
// );

// const ShopProducts = model('shops', ShopProductSchema);

// export default ShopProducts;