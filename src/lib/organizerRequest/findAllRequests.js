import OrganizerRequest from "../../models/OrganizerRequest.js";


const findAllRequests = async () => {
    const cursor = await OrganizerRequest.find();

    return cursor
}

export default findAllRequests