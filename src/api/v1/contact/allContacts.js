import getAllContacts from "../../../lib/Contact/getAllContacts.js";

const allContacts = async(req, res)=>{
    const filter = req.query;
    try {
        const result = await getAllContacts()
        res.send(result)
    } catch (error) {
        return res.send(error)
    }
}

export default allContacts;