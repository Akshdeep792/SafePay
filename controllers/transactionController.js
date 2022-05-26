
import Transaction from "../models/Transaction.js"
import  { StatusCodes } from 'http-status-codes'
import {BadRequestError, UnAuthenticatedError} from '../errors/index.js'

const transaction = async(req,res) => {
    
    const {payto, accountNo, upiId, amount, paymentStatus, paymentFace} = req.body;

    if(!payto || !accountNo || ! upiId || !amount) {
        throw new BadRequestError('Please Provide All Values')
    }
    req.body.createdBy = req.user.userId
    const transaction = await Transaction.create(req.body);
    res.status(StatusCodes.CREATED).json({transaction})
}

//return all the transactions in database
const history = async(req,res) => {
    const queryObject = {
        createdBy : req.user.userId,
    }

    
    const transactions = await Transaction.find({$query : {queryObject}, $orderby : 1});
    const totalTransaction = await Transaction.countDocuments(queryObject)
    res.status(StatusCodes.OK).json({transactions, totalTransaction})
}



export {transaction, history}