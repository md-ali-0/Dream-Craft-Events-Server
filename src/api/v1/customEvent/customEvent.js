import CustomEvent from "../../../models/CustomEvent.js";

const customEvent = async (req, res) => {
    const request = req.body;

    try {
        const customEventRequest = new CustomEvent(request);
        const result = await customEventRequest.save();
        res.send(result);
    } catch (error) {
        console.error('Error saving request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
export default customEvent;