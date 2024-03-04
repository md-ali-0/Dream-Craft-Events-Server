import { Schema, model } from "mongoose";

const CustomEventSchema = new Schema(
    {
        'firstName' : {type: String, required: true},
        'lastName' : {type: String, required: true},
        'fullName' : {type: String, required: true},
        'email': {type: String, required: true},
        'phone': {type: String, required: true},
        'eventType': {type: String, required: true},
        'date': {type: String, required: true},
        'location':{type: String, required: true},
        'guests' : {type: String, required: true},
        'photography': {type: String, required: false},
        'catering': { type: String, required: false},
        'request': {type: String, required: false},
        'cost': {type: Number, required: true},
        'status': {type: String, required: false},
        'seen': {type: String, required: false}
    },
    {versionKey: false}
)

const CustomEvent = model('CustomEvents', CustomEventSchema)

export default CustomEvent;