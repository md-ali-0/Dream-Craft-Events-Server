import User from "../../models/Users.js"

const addUser = async(user)=>{
    const NewUser = new User(user)

    try{
        const cursor = await NewUser.save()
        return cursor
    } catch(err){
        throw new Error("Something Went Wrong")
    }
}

export default addUser