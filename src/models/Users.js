import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        'firstname' : {type: String, required: true},
        'lastname' : {type: String, required: true},
        'name' : {type: String, required: true, default: function() {return this.firstname;}},
        'phone' : {type: String},
        'email' : {type: String, required: true, unique: true},
        'image' : {type: String, required: true,
            default: 'https://i.ibb.co/0XQDTZ1/user.png'
        },
        'cover' : {type: String, required: true,
            default: 'https://i.ibb.co/SBJcwSg/cover.png'
        },
        'address' : {type: String},
        'city' : {type: String},
        'country' : {type: String},
        'bio' : {type: String},
        'role': {type: String, required: true, enum: ['admin', 'organizer', 'user'], default: 'user'},
        'password' : { type: String},
        'createdAt': { type: Date, default: new Date()},
    },
    { versionKey: false }
)

const User = model('users', UserSchema)

export default User