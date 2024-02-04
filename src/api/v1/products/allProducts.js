import getAllShops from "../../../lib/shops/getAllShops.js";

const allShops = async(req, res)=>{
    const filter = req.query;
    try {
        const result = await getAllShops()
        res.send(result)
    } catch (error) {
        return res.send(error)
    }
}

export default allShops;