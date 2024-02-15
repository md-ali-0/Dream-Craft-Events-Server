import findAllRequests from "../../../../lib/organizerRequest/findAllRequests.js";

const findAll = async (req, res) => {
    try {
        const result = await findAllRequests()
        res.send(result)
    } catch (error) {
        return res.send(error)
    }
}


export default findAll
