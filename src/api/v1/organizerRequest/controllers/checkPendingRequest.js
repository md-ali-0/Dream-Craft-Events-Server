import OrganizerRequest from "../../../../models/OrganizerRequest.js";

const checkPendingRequest = async (req, res) => {

    const userId = req.query.userId;

    try {
        const existingRequest = await OrganizerRequest.findOne({ userId, status: 'pending' });
        if (existingRequest) {
            res.json({ hasPendingRequest: true });
        } else {
            res.json({ hasPendingRequest: false });
        }
    } catch (error) {
        console.error('Error checking pending request:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default checkPendingRequest;