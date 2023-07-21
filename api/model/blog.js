const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
        unique:true,
    },
    author:{
        type:String,
        required:true,
        unique:true,
    },
    photo:String
},
{timestamps:true}
)

module.exports = mongoose.model('blog',blogSchema);