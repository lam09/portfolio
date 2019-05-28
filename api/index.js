let express = require('express');
let app = express();
const https = require('https');
const fs = require('fs');

let bodyParser = require('body-parser');
let port = process.env.PORT || 12002;
let comment = require('./comment');
let Email = require('./Email');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");
    next();
  });

app.get('/all', function(req, res) {
    comment.find({}, function(err, comments) {
      
      res.send(comments.reverse());  
    });
  });
app.post('/add', function(req, res) {
    var newComment=new comment({
        name:req.body.name,
        comment:req.body.comment
    });
    newComment.save().then((com)=>{
        res.send(com);
    });
  });
app.post('/sendmail',function(req,res){
  Email.sendMail(req,res);
});
https.createServer({
  key: fs.readFileSync('./sslkey/key.pem'),
  cert: fs.readFileSync('./sslkey/cert.pem'),
  passphrase: 'lataa.sk'
}, app).listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing