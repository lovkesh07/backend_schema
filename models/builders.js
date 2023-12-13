const mongoose = require('mongoose');

const builderSchema = new mongoose.Schema({
    
    builderName:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require:true,
    },
    password: {
        type:String,
        require:true,
    },
    propeties:[{
        
    }],
    appointments:[{
        type: Schema.Types.ObjectId,
        ref: 'appointmentsSchema',
    }],
    
});

module.exports = mongoose.model("builders", builderSchema);