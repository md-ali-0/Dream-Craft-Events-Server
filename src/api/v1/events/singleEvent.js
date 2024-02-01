import getSingleEvents from "../../../lib/events/getSingleEvents.js";

const singleEvent = async(req, res)=>{
    const id = req.params.id;
    try {
        const result = await getSingleEvents(id)
        res.send(result)
    } catch (error) {
        return res.send(error)
    }
}

export default singleEvent;