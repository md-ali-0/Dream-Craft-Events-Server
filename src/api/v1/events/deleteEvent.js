import removeEvent from "../../../lib/events/removeEvent.js";


const deleteEvent = async(req, res)=>{
    const id = req.params.id;
    
    try {
        const result = await removeEvent(id)
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default deleteEvent;