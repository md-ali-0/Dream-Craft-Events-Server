import Contact from "../../models/Contact.js"

const getAllContacts = async()=>{
    
    try{
        const cursor = await Contact.find()
        return cursor
    } catch(err){
        throw new Error(err)
    }
}

export default getAllContacts;