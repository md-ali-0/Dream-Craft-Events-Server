import CustomEvent from "../../../models/CustomEvent.js";

const rejectCustomEvent = async (req, res) => {
    const filter = {
        _id: req.params.id,
    };
    const update = {
        $set: {
            status: 'rejected'
        }
    }
    try {

        const updateStatus = await CustomEvent.findOneAndUpdate(filter, update)
        res.send(updateStatus);
        
    } catch (error) {
        console.error("Error updating status:", error)
    }


}

export default rejectCustomEvent;