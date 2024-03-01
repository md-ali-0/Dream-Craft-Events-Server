import getAdminStatistics from "../../../lib/dashboard/getAdminStatistics.js";

const adminStatistics = async(req, res)=>{
    
    try {
        const result = await getAdminStatistics()
        res.send(result)
    } catch (error) {
        return res.send(error)
    }
}

export default adminStatistics;