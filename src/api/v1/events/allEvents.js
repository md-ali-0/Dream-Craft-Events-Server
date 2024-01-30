import getAllEvents from "../../../lib/events/getAllEvents.js";

const allEvents = async(req, res)=>{
    const filter = req.query;
    try {
        const result = await getAllEvents()
        res.send(result)
    } catch (error) {
        return res.send(error)
    }
}

export default allEvents;