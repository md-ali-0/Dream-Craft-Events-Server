import Events from "../../models/Events.js"


const getAllEvents = async()=>{
    
    try{
        const cursor = await Events.find()
        return cursor
    } catch(err){
        throw new Error(err)
    }
}

export default getAllEvents