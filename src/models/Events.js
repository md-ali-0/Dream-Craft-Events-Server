import { Schema, model } from "mongoose";

const EventSchema = new Schema(
    {
        'title' : {type: String, required: true},
        'type' : {type: String, required: true},
        'location': {type: String, required: true},
        'speakers': {type: String, required: true},
        'sponsor': {type: String, required: true},
        'description': {type: String, required: true},
        'seat':{type: String, required: true},
        'image' : {type: String, required: true,
            default: 'https://placehold.co/650x400/png'
        },
        'date': {type: Date, required: true},
        'createdAt': { type: Date, default: new Date()},
    },
    {versionKey: false}
)

const Events = model('events', EventSchema)

export default Events