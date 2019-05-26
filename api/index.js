var mongoose = require('mongoose');
var db = require('./db');
let CommentSchema = new mongoose.Schema({
    id: {type:String,unique:true},
    name:{ type:String,unique:true,required:true},
    password: String,
    credit: Number,
    current_bet: Number,
    stats:[
       {type: mongoose.Schema.Types.ObjectId, ref: 'Statistic'},
    ],
});
