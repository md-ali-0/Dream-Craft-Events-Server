const { model, Schema } = require("mongoose");

const OrganizerRequestSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "email": {
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
})


const OrganizerRequest = model("OrganizerRequest", OrganizerRequestSchema)

module.exports = OrganizerRequest