const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { login } = require('../controllers/user');


const userSchema = new mongoose.Schema({
    name: {
        type:String,
        require: [true, 'please provid a name'],
        minlength: 3,
        Maxlength: 50,
    } ,
    email: {
        type: String,
        required:[true, 'please provide an email'],
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide Valid email'],
        unique:true,
    },
    password: {
        type: String,
        required: [true, 'please provide a password'],
        minlength: 6,
    },
    workouts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "exercise",
    }]
    
})

userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.createJWT = function () {
    return jwt.sign(
        {userId: this._id, name: this.name},
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_LIFETIME
        }
    )
}

userSchema.methods.checkPassword = async function (passToCheck) {
    console.log(passToCheck, " ", this.password);
    const isMatch = await bcrypt.compare(passToCheck, this.password)
    return isMatch
}

module.exports = mongoose.model('User', userSchema)