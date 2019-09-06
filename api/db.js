var mongoose = require('mongoose');
const uri = 'mongodb://lee:leelee22@127.0.0.1:27017/portfolio_comment_app';

const conn =  mongoose.connect(uri,{useNewUrlParser: true},(error)=>{
    if(error){
		console.log("Error " + error);
	}else{
		console.log("Connected successfully to server")
	}  
});
module.exports=conn;