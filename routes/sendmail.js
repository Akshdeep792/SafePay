import express from'express'
const router = express.Router();
import {sendMail} from '../controllers/emailcontroller.js'

router.route('/sendmail').post(sendMail)


export default router