const findAllRequests = require("../../../../lib/organizerRequest/findAllRequests");

const findAll = async (req, res) => {
    const allServices = await findAllRequests()
    res.send(allServices);
}

module.exports = findAll
