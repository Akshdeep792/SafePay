import mongoose from 'mongoose'

const TransactionSchema = new mongoose.Schema( {
    payto : {
        type: String,
        required : [true, 'Please Provide Name'],
        maxlength: 50
    },
    accountNo:{
        type : Number,
        required: [true, 'Please provide number/accountNo'],
        minlength: 10,
        maxlength: 18
    },
    upiId: {
        type: String ,
        required : true
    },
    amount:{
        type: Number,
        required : true
    },
    paymentStatus : {
        type: Boolean,
        default: false
    },
    paymentFace: {
        type: String
    },
    createdBy : {
        type: mongoose.Types.ObjectId,
        ref : 'User',
        required: [true, 'Please Provide User']
    }
}, {timestamps: true}
)

export default mongoose.model('Transaction', TransactionSchema)