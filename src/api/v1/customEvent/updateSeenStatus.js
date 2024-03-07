import CustomEvent from "../../../models/CustomEvent.js"

const updateSeenStatus = async(req, res)=> {
    const filter = {
        _id: req.params.id,
    };
    const update = {
        $set: {
            seen: 'true'
        }
    }
    try {

        const updateStatus = await CustomEvent.updateMany(filter,update)
        res.send(updateStatus)
      
        
    } catch (error) {
        console.error("Error updating status:", error)
    }


}

export default updateSeenStatus;