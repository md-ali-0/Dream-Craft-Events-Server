import OrganizerRequest from "../../../../models/OrganizerRequest.js";

const postRequest = async (req, res) => {
    const request = req.body;

    try {
        const newRequest = new OrganizerRequest(request);
        const result = await newRequest.save();
        res.send(result);
    } catch (error) {
        console.error('Error saving request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
export default postRequest;