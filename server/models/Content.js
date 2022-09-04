const mongoose = require('mongoose')
const { Schema } = mongoose
const shortid = require('shortid')

const ContentSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    title: {
        type: String,
        default: "",
    },
    description: {
        type: String,
        default: "",
    },
    created_at: {
        type: Number,
        default: Date.now()
    },
    updated_at: {
        type: Number,
        default: Date.now()
    }
})

module.exports = mongoose.model('Content', ContentSchema)