const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_ID,
      pass: createTestAccount.MP, // You might want to replace this with an actual password or secret
    },
  });

  // Define an async function to send emails
  async function sendMail() {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // Sender address
      to: data.to, // List of receivers
      subject: data.subject, // Subject line
      text: "Hello world?", // Plain text body
      html: data.html, // HTML body
    });

    console.log("Message sent: %s", info.messageId);
  }

  // Call the sendMail function
  await sendMail();
});

module.exports = sendEmail;
