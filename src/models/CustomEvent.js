import { Schema, model } from "mongoose";

const CustomEventSchema = new Schema(
    {
        'firstName' : {type: String, required: true},
        'lastName': {type: String, required: true},
        'email': {type: String, required: true},
        'phone':{type: String, required: true},
        'eventType' : {type: String, required: true},
        'date': {type: Date, required: true},
        'location': {type: String, required: true},
        'totalGuests': {type: String, required: true },
        'photoGraphy': {type: String, required: false },
        'catering': {type: String, required: false },
        'request': {type: String, required: false }
    },
    {versionKey: false}
)

const CustomEvent = model('CustomEvent', CustomEventSchema)

export default CustomEvent;