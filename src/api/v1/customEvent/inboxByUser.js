import CustomEvent from "../../../models/CustomEvent.js";

const inboxByUser = async (req, res) => {
    const email = req.query.email;

    try {
        const request = await CustomEvent.find({ email }).sort({ date: -1 });
        res.send(request)
    } catch (error) {
        console.error('Error checking user inbox:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export default inboxByUser;