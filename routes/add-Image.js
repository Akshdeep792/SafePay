import express from'express'
const router = express.Router();
import {upload} from '../helper/filehelper.js'
import auth from '../middleware/auth.js';
import {getImages, ImageUpload} from '../controllers/imageController.js'
router.route('/add-image').post(upload.single('file'), ImageUpload )
router.route('/get-images').get(getImages)

export default router