import mongoose  from 'mongoose';

const imageSchema =  mongoose.Schema({
    name: String,
    img1: {
        type: String,
        required: true
    },
    
    img2: {
        type: String,
        required: true
    },
    img3: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('image', imageSchema)