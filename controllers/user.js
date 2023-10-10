const User = require('../models/user');
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, UnauthenticatedError} = require('../errors')

const register = async (req, res) => {
    const user = await User.create({...req.body})
    const token = user.createJWT();
    console.log(token);
    res.status(StatusCodes.CREATED).render('home.ejs');
}
const login = async (req, res) => {
    const {email, password} = req.body
    console.log(password);

    if(!email || !password){
        throw new BadRequestError('please provide email and password')
    }
    const user = await User.findOne({email})
    const token = user.createJWT()

    
    if (!user) {
        throw new UnauthenticatedError('invalid stuff')
    }
    const isPasswordCorrect = await user.checkPassword(password)
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('invalid stuff')
    }
    
    
    res.status(StatusCodes.OK).render('home.ejs', )
}

module.exports = {
    register,
    login,
}