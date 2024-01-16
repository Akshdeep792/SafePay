import { StatusCodes } from 'http-status-codes'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import axios from 'axios';
dotenv.config();
//this will send mail 
const sendMail = async (req, res) => {
    // console.log('Send Mail')

    // for setting the sender
    // console.log("Working")
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SAFEPAY_MAIL,
            pass: process.env.SAFEPAY_PASSWORD
        }
    });
    // console.log(transporter);
    console.log(req.body.to)
    // this will set info that has to sent to user
    var mailOptions = {
        from: 'safepay404@gmail.com',// sender address
        to: req.body.to, // list of receivers
        subject: 'Unknown Face Detected', // Subject line
        html: `
        <div style="padding:10px; align-items : center;">
        <h1 style="font-size:1.5rem">Unknown Face Detected</h1>
        <p style="font-size: 1rem">An Unknown Face has been found making the transaction. The transaction has been canceled. And Your money is secured. </p>
        <img style="width: 80vw; border:1px solid black" src="cid:unique@nodemailer.com" alt="Unknown Face">
        </div>
        `,
        attachments: [{
            filename: 'image.png',
            path: req.body.paymentFace,
            cid: 'unique@nodemailer.com' //same cid value as in the html img src
        }]
    };
    // console.log(mailOptions)
    // this will send mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (!error) {
            res.status(StatusCodes.OK).json({ msg: "Mail Sent" })
        }
        console.log(error.message)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Something went wrong' })

    });
}
export { sendMail }