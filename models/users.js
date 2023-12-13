const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    
    username:{
        type: String,
        require: true,
    },
    userType:{
        type: String,
        require:true,
    },    
    appointments:[{
        type: Schema.Types.ObjectId,
        ref: 'appointmentsSchema',
    }],
    
});

module.exports = mongoose.model("users", usersSchema);