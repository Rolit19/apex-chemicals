const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "rolit454@gmail.com", // your email address to send email from
    pass: "roliT@1910" // your gmail account password
  }
});

module.exports = transporter;