var mongoose = require('mongoose');
const uri = 'mongodb://lee:leelee22@34.220.142.46:27017/portfolio_comment_app';

const conn =  mongoose.connect(uri,{useNewUrlParser: true},(error)=>{
    if(error){
		console.log("Error " + error);
	}else{
		console.log("Connected successfully to server")
	}  
});
module.exports=conn;