const { Schema, model } = require('mongoose');

const userSchema = Schema({

    name: {
        type:String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    state: {
        type: Boolean,
        default: true
    },

});

userSchema.methods.toJSON = function() {
    const { __v, password, _id, ...user} = this.toObject();
    user.uid = _id;
    return user
}

module.exports = model( 'User', userSchema);