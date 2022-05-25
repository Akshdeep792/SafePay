// import Img from "../models/Image.js"
// require('express-async-errors')
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js'
import UserImage from '../models/UserImage.js';
import { fileSizeFormatter } from '../utils/fileSizeformatter.js';


const ImageUpload = async (req, res) => {


    if (!req.user) {
        throw new BadRequestError('No User Found!')
    }
    const file = new UserImage({
        relation: 'User',
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
        createdBy: req.user.userId
    });
    await file.save();
    res.status(StatusCodes.CREATED).json({ file })

}

const getImages = async (req, res) => {

    const queryObject = {
        createdBy: req.user.userId,
    }

    const users = await UserImage.find(queryObject);
    const totalUsers = await UserImage.countDocuments(queryObject);
    res.status(StatusCodes.OK).json({ users , totalUsers});
}

export { ImageUpload, getImages }