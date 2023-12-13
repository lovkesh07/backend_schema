const mongoose = require('mongoose');

const appointmentsSchema = new mongoose.Schema({
    
    Property:{
        type: Schema.Types.ObjectId,
        ref: 'properties',
    },
    status:{
        type: String,
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'userSchema',
    }],
  
    
});

module.exports = mongoose.model("appointments", appointmentsSchema);