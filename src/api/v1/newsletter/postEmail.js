import news from "../../../models/Newsletter.js";

const postEmail = async (req, res) => {
    const request = req.body;

    try {
        const newRequest = new news(request);
        const result = await newRequest.save();
        res.send(result);
    } catch (error) {
        console.error('Error saving request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
export default postEmail;