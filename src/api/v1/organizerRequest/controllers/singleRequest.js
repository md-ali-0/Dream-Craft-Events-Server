import OrganizerRequest from "../../../../models/OrganizerRequest.js";

const singleRequest = async (req, res) => {
    const email = req.query.email;

    try {
        const request = await OrganizerRequest.findOne({ email }, 'status');
        res.send(request)
    } catch (error) {
        console.error('Error checking pending request:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export default singleRequest;