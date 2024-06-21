// const sgMail = require('@sendgrid/mail');
// const dotenv = require('dotenv');

// dotenv.config();

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// module.exports = sgMail;
const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = sgMail;
