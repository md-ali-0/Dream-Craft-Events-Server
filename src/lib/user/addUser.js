import User from "../../models/Users.js"

const addUser = async(user)=>{
    const NewUser = new User(user)
    try{
        const cursor = await NewUser.save()
        return cursor
    } catch(err){
        if (err.code=11000) {
            const error = new Error('Email Aready Exists')
            error.status = 404
            throw error
        }
        throw new Error(err)
    }
}

export default addUser