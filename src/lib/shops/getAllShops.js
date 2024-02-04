import ShopProducts from '../../models/ShopProducts.js'


const getAllShops = async()=>{
    
    try{
        const cursor = await ShopProducts.find()
        return cursor
    } catch(err){
        throw new Error(err)
    }
}

export default getAllShops