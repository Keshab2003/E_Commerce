import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0//indicates false
    }
}, {
    timestamps: true//whenever new user is created the time of creation is stored there
})

export default mongoose.model('user', userSchema)
