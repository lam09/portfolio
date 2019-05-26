var mongoose = require('mongoose');
var db = require('./db');
let CommentSchema = new mongoose.Schema({
    name:{ type:String,unique:true,required:true},
    comment: String 
});
const Comment = mongoose.model('comment', CommentSchema);
module.exports= Comment;