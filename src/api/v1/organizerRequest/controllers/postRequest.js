const OrganizerRequest = require("../../../../models/OrganizerRequest");

const postRequest = async (req, res) => {
    const { name, email, company, experience, skills } = req.body;

    try {
        const newRequest = new OrganizerRequest({
            name,
            email,
            company,
            experience,
            skills
        });

        const savedRequest = await newRequest.save();
        res.send(savedRequest);
    } catch (err) {
        console.error('Error saving request:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = postRequest;