const nodemailer = require("nodemailer");
const html=`<h1>Hello Nodemailer</h1>`;
async function main(){
const transporter=nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
  auth: {
    user:"elizabethkjacob2000@gmail.com",
    pass: "egia hjrf ogsm hgxr",
  },

});
const info=await transporter.sendMail({
    from: "<elizabethkjacob2000@gmail.com>",
    to: "<elizabethkjacob2000@gmail.com>", 
    subject: "Test email for nodemailer", // Subject line
    html: html, // html body


})
console.log("Message sent:"+ info.messageId);
}
main()
.catch(e=>console.log(e));