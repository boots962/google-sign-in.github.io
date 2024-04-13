
const nodemailer = require('nodemailer');

function showPassword() {
    document.querySelector('.emnput').type="password";
    document.querySelector('.emnput').placeholder = "Enter Password";
    document.querySelector('.forgotE').textContent = "Forgot Password?";
    document.querySelector('.forgotE').href = 'https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop';
    document.querySelector('.sub').textContent = "Submit";
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'boots962@gmail.com',
    pass: 'j1a2c3k4g' 
  }
});

const mailOptions = {
  from: 'boots962@gmail.com', 
  to: 'jacksud27@gmail.com', 
  subject: 'Test Email', 
  text: 'This is a test email from Node.js' 
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
