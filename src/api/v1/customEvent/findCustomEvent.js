import CustomEvent from "../../../models/CustomEvent.js"

const findCustomEvent = async (req, res) => {
    try {
        const result = await CustomEvent.find()
        res.send(result)
    } catch (error) {
        return res.send(error)
    }
}

export default findCustomEvent;