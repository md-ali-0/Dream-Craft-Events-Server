import { model, Schema } from "mongoose";

const OrganizerRequestSchema = new Schema(
    {
        "userId": {
            type: String,
            required: true
        },
        "name": {
            type: String,
            required: true
        },
        "email": {
            type: String,
            required: true
        },
        "image": {
            type: String,
            required: true
        },
        "company": {
            type: String,
            required: true
        },
        "experience": {
            type: String,
            required: true
        },
        "skills": {
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


const OrganizerRequest = model("organizer-request", OrganizerRequestSchema)

export default OrganizerRequest;