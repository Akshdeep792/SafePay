import mongoose from 'mongoose'

const UserImageSchema = new mongoose.Schema({
    relation: {
        type: String,
    },
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true,
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
    }
})

export default mongoose.model('UserImage', UserImageSchema)