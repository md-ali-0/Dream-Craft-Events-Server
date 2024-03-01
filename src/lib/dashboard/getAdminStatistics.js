
const getAdminStatistics = async()=>{

    try{
        const cursor = await Events.find()
        return cursor
    } catch(err){
        throw new Error(err)
    }
}

export default getAdminStatistics