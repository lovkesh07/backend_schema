const mongoose = require('mongoose');

const propetiesSchema = new mongoose.Schema({
    
    propertyName:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require:true,
    },
   location: {
        type:String,
        require:true,
    },
    bedrooms: {
        type:int,
        require:true,
    },
    bathrooms: {
        type:int,
        require:true,
    },
   
    amenities:[{
        type:String,
    }],
    builder:[{
        type: Schema.Types.ObjectId,
        ref: 'builderSchema',

    }],
    user:[{
        type: Schema.Types.ObjectId,
        ref: 'usersSchema',

    }],
    
});

module.exports = mongoose.model("properties", propetiesSchema);