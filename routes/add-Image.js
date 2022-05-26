import express from'express'
const router = express.Router();
import {getImages, ImageUpload} from '../controllers/imageController.js'
router.route('/add-image').post(ImageUpload)
router.route('/get-images').get(getImages)

export default router