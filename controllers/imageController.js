// import Img from "../models/Image.js"
// require('express-async-errors')
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js'
import UserImage from '../models/UserImage.js';
import { cloudinary } from '../utils/cloudinary.js';

const ImageUpload = async (req, res) => {


    if (!req.user) {
        throw new BadRequestError('No User Found!')
    }
    const fileStr = req.body.data

    //saving image to database 
    const file = new UserImage({
        image : fileStr,
        createdBy: req.user.userId
    });
    await file.save();

   // uploading it on cloudinary 
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset : 'engage2022',
    }, {
        public_id : req.user.userId, //saving image with userId so that we can get it for specific user
    })
    console.log(uploadedResponse)
    res.status(StatusCodes.CREATED).json({uploadedResponse})

}

const getImages = async (req, res) => {

   // getting image from cloudinary for showing it on frontend and doing photo recognition
    const resource = await cloudinary.v2.search.expression(`public_id=${req.user.userId}`).execute() // expression here will do query searc for public id with given value 
   
    const publicId = resource.resources[0].public_id;
   
    res.status(StatusCodes.OK).json({resource, publicId})
}

export { ImageUpload, getImages }