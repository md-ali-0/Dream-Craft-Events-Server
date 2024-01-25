import User from "../../models/Users.js"

const addUser = async(user)=>{
    const NewUser = new User(user)
    try{
        const cursor = await NewUser.save()
        return cursor
    } catch(err){
        if (err.code=11000) {
            return {code: 409, massage: 'email already exists'}
        }
        throw new Error(err)
    }
}

export default addUser