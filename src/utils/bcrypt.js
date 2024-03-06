import bcrypt from "bcrypt";

export const bcHashGen = async(planePassword)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.hash(planePassword, 10,(err, hash)=>{
            if(err){
                reject(err)
            } else{
                resolve(hash)
            }
        })
    })
}

export const bcHashCompare = async(planePassword, hashPassword)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.compare(planePassword, hashPassword, (err, result)=>{
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}