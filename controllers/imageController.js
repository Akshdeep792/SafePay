// import Img from "../models/Image.js"
// require('express-async-errors')
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js'
import UserImage from '../models/UserImage.js';
import { fileSizeFormatter } from '../utils/fileSizeformatter.js';
import { cloudinary } from '../utils/cloudinary.js';

const ImageUpload = async (req, res) => {


    if (!req.user) {
        throw new BadRequestError('No User Found!')
    }
    const fileStr = req.body.data
    const file = new UserImage({
        image : fileStr,
        createdBy: req.user.userId
    });
    await file.save();
   
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset : 'engage2022',
    }, {
        public_id : req.user.userId,
    })
    console.log(uploadedResponse)
    res.status(StatusCodes.CREATED).json({uploadedResponse})

}

const getImages = async (req, res) => {

   
    const resource = await cloudinary.v2.search.expression(`public_id=${req.user.userId}`).execute()
    console.log(resource)
    const publicId = resource.resources[0].public_id;
    console.log(publicId)
    res.status(StatusCodes.OK).json({resource, publicId})
}

export { ImageUpload, getImages }