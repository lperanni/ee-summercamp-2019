const nodemailer = require("nodemailer");


  async function send(body){


  const mail = {

    from: process.env.USER_MAIL,
    to: "lucianoperanni95@gmail.com",
    subject: body.subject,
    message: body.message + " \n " + `Sent from ${body.email} by ${body.fullname}`

  }


  console.log(mail)
  
  const transporter = nodemailer.createTransport({
    service: 'hotmail', 
    auth: {
      user: process.env.USER_MAIL, 
      pass: process.env.USER_PASS 
    }
  });

  
  if(mailObj.from != ""){

    await transporter.sendMail({
      from: process.env.USER_MAIL, 
      to: mail.to,
      subject: mail.subject, 
      text: mail.message,
      html: `<b>${mail.message}</b>` 
    });

  }
}
send().catch(console.error);


module.exports = send;