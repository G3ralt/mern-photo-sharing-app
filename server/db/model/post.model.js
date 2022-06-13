import mongoose from "mongoose";

const schema = mongoose.Schema({
    title: String,
    description: String,
    createdBy: String,
    createdDate: {
        type: Date,
        default: new Date(),
    },
    tags: [String],
    selectedFile: String,
    likes: {
        type: Number,
        default: 0,
    },
});

export default mongoose.model('Post', schema);