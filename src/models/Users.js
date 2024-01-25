import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        'name' : {type: String, required: true},
        'email' : {type: String, required: true, unique: true},
        'image' : {type: String, required: true,
                    default: 'https://placehold.co/500x500/png'
                },
        'password' : { type: String, required: true},
        'createdAt': { type: Date, default: new Date()},
    }
)

const User = model('users', UserSchema)

export default User