import mongoose from 'mongoose'

const UserImageSchema = new mongoose.Schema({
    
    image: {
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