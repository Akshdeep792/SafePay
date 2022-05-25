// this controller helps to send and get data of user from database

import User from "../models/User.js"
import { StatusCodes } from 'http-status-codes'
import {BadRequestError, UnAuthenticatedError} from '../errors/index.js'





const register = async (req,res) => {
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            throw new BadRequestError('Please Provide All Values')
        }
        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists){
            throw new BadRequestError('Email already exists')
        }
        const user = await User.create(req.body);
        const token  = user.createJWT();
        res.status(StatusCodes.CREATED).json({user : {
            email : user.email,
            lastName: user.lastName,
            name: user.name,
            number: user.number,
            upiId: user.upiId
        }, token});
}

const login = async (req,res) => {
    
    const {email, password} = req.body;

    if(!email ||!password){
        throw new BadRequestError('Please provide all values');
    }
    const user = await User.findOne({email}).select('+password');
    if(!user){
        throw new UnAuthenticatedError('Invalid Credentials')
    }
    const isCorrectPassword = await user.comparePassword(password);
    if(!isCorrectPassword){
        throw new UnAuthenticatedError('Incorrect Password');
    }
    const token = user.createJWT();
    user.password = undefined
    res.status(StatusCodes.OK).send({user, token})

}

const updateUser = async (req,res) => {
    const {email, name, lastName, upiId, number} = req.body;

    if(!email || !name || !lastName ||!upiId || !number){
        throw new BadRequestError('Please Provide All Values')
    }

    const user = await User.findOne({_id : req.user.userId})
    user.email = email
    user.name = name
    user.lastName = lastName
    user.number=number
    user.upiId = upiId
    

    await user.save();
    const token = user.createJWT();
    res.status(StatusCodes.OK).send({user, token})
   


}


export {register, login, updateUser}