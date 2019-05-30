const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    service: 'gmail',
        auth: {
        user: 'info.lataa.sk@gmail.com',
        pass: 'lamanh278'
    }
});


let sendMail = function(req,res){
    console.log(req.body);
    const mailOptions = {
        from: req.body.email,
        to: "lamtuananh278@gmail.com",
        subject: req.body.subject,
        generateTextFromHTML: true,
    };    
    mailOptions.html = "<b>"+req.body.name + "writed mail from lataa.sk for you</b><p>"+ req.body.message+"</p>";
    transporter.sendMail(mailOptions, (error, response) => {
    res.send({msg:"Thank you for contact me"});
    transporter.close();
});
}

module.exports = {sendMail};