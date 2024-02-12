import express from 'express'
const router = express.Router();
import { transaction, history } from "../controllers/transactionController.js";

router.route('/transaction').post(transaction)
router.route('/history').get(history)




export default router