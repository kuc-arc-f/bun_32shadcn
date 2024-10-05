import express from 'express';
const router = express.Router();
import nodemailer from 'nodemailer';

/**
* 
* @param
*
* @return
*/ 
router.post('/send', async function(req: any, res: any) {
  const retObj = {ret: 500, message: ""};
  try {
    if(!req.body){
      throw new Error("nothing, body");
    }
    const body = req.body;
    console.log(req.body);
    //console.log("GOOGLE_MAIL_USER= ", process.env.GOOGLE_MAIL_USER);
    //console.log("GOOGLE_MAIL_PASSWORD= ", process.env.GOOGLE_MAIL_PASSWORD);
    //return res.json(retObj);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GOOGLE_MAIL_USER,     // 送信者のメールアドレス
        pass: process.env.GOOGLE_MAIL_PASSWORD  // 送信者のメールパスワードまたはアプリパスワード
      }
    });
    // メールのオプション
    const mailOptions = {
      from: process.env.GOOGLE_MAIL_USER,
      to: body.to_mail,
      subject: body.subject,
      text: body.mail_body,
    };
    //Send-mail
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error("Error sending email:");
    }
    retObj.ret = 200;
    return res.json(retObj)
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default router;
