const Exercise = require('../models/exercise');
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')
const getId = require('./middle/getuserID')

const addExercise = (req, res) => {
    res.render('addExercise')
}
 
const createExercise = async (req,res) => {
    console.log(req.body.description);
    
    const exercise = await Exercise.create({...req.body}) 
    res.render('home', { exercise: exercise } )
}
const getExercises = async (req,res) => {
    try {
        console.log('in here');
        const authHeader = req.body
        console.log(authHeader, "nothing");
        const Exercises = await Exercise.find();
        console.log('passed');
        res.render('workouts', { Exercises: Exercises })
    } catch (error) {
        res.render('workouts', { Exercises: [] })
    }
    
}
const editExercise = (req, res) => {

}
const updateExercise = (req,res) => {
    res.send('update')
}
const deleteExersice = (req,res) => {
    res.send('delete')
}


module.exports = {
    createExercise,
    getExercises,
    editExercise,
    updateExercise,
    deleteExersice,
    addExercise
}