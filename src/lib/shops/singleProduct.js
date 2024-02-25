import ShopProducts from "../../models/ShopProducts.js"

const getSingleProduct = async(id)=>{
    
    try{
        const cursor = await Events.findById(id)
        return cursor
    } catch(err){
        throw new Error(err)
    }
}

export default getSingleProduct