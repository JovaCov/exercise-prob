const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'User',
    //     required: true,  
    // },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    sets : {
        type: Number,
        default: 3,
    },
    reps : {
        type: Number,
        default: 8,
    },
    createdBy: {
        type:mongoose.Types.ObjectId,
        
        rquired: [true, 'please provide user']
    }
});

module.exports = mongoose.model('Exercise',exerciseSchema);
