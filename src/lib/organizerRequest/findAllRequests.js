const OrganizerRequest = require("../../models/OrganizerRequest");


const findAllRequests = async () => {
    const cursor = await OrganizerRequest.find();

    return cursor
}

module.exports = findAllRequests