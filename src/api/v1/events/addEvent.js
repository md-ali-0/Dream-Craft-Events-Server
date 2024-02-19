import addNewEvent from "../../../lib/events/addNewEvent.js";

const addEvent = async (req, res) => {
    const newEvent = req.body;
    try {
        const result = await addNewEvent(newEvent);
        res.send(result);
    } catch (error) {
        return res.status(error?.status || 500).send(error.message);
    }
};

export default addEvent;
