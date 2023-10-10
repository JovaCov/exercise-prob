const express = require('express');
const router = express.Router();

const { 
    createExercise,
    getExercises,
    updateExercise,
    deleteExersice,
    editExercise,
    addExercise,
} = require('../controllers/exersice')


router.route('/').post(createExercise).get(getExercises);
router.route('/add').get(addExercise)
router.route('/edit').patch(editExercise)
router.route('/:id').delete(deleteExersice);
router.route('/update/:id').patch(updateExercise)


module.exports = router