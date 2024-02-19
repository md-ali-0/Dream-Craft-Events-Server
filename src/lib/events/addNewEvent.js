import Events from "../../models/Events.js"

const addNewEvent = async(newEvent)=>{
    const NewEvent = new Events(newEvent)
    try{
        const cursor = await NewEvent.save()
        return cursor
    } catch(err){
        throw new Error(err)
    }
}

export default addNewEvent