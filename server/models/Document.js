const mongoose = require('mongoose')
const { Schema } = mongoose
const shortid = require('shortid')

const DocumentSchema = new Schema({
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
    password: {
        type: String,
        required: true
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

module.exports = mongoose.model('Document', DocumentSchema)