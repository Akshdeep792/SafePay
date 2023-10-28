import { StatusCodes } from 'http-status-codes'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config();
//this will send mail 
const sendMail = async (req, res) => {
    // console.log('Send Mail')

    // for setting the sender
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        service: 'gmail',
        auth: {
            user: process.env.SAFEPAY_MAIL,
            pass: process.env.SAFEPAY_PASSWORD
        }
    });

    // this will set info that has to sent to user
    var mailOptions = {
        from: 'safepay404@gmail.com',// sender address
        to: req.body.to, // list of receivers
        subject: 'Unknown Face Detected', // Subject line
        text: 'Following person is trying to do transaction',
        html: `
        <div style="padding:10px; align-items : center">
        <h1>Unknown Face Detected</h1>
        <p>An Unknown Face has been found making transaction. Please take a Look and take action after seeing identity in history</p>
        </div>
        `
    };

    // this will send mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (!error) {
            res.status(StatusCodes.OK).json({ msg: "Mail Sent" })
        }
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Something went wrong' })

    });
}
export { sendMail }