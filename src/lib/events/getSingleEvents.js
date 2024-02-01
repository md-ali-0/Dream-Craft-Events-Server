import Events from "../../models/Events.js"

const getSingleEvents = async(id)=>{
    
    try{
        const cursor = await Events.findById(id)
        return cursor
    } catch(err){
        throw new Error(err)
    }
}

export default getSingleEvents