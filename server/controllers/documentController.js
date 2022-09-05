const Document = require('../models/Document')
const bcrypt = require('bcryptjs')

const getDocument = async (req, res) => {
    try {
        const id = req.params.id
        const { password } = req.body
        const content = await Document.findOne({ _id: id })
        const passwordMatches = await bcrypt.compare(password, content.password);
        if (!passwordMatches) {
            return res.json({ success: false, message: "Incorrect password" })
        }
        if (!content) {
            return res.json({ success: false, message: "Document not found" })
        }
        return res.json({ success: true, message: "Document Found", content })
    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: "Something went wrong. Try Again!!!" })
    }
}

const createDocument = async (req, res) => {
    try {
        const { title, description, password } = req.body
        const salt = await bcrypt.genSalt(10)
        const securedPassword = await bcrypt.hash(password, salt)
        const content = await Document.create({ title, description, password: securedPassword })
        if (!content) {
            return res.json({ success: false, message: "Error Creating Document" })
        }
        return res.json({ success: true, message: "Document Created Successfully", content })
    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: "Something went wrong. Try Again!!!" })
    }
}

const updateDocument = async (req, res) => {
    try {
        const { title, description } = req.body
        const id = req.params.id
        const content = await Document.findOne({ _id: id })
        if (!content) {
            return res.json({ success: false, message: "Document not found" })
        }
        const updateDocument = await Document.updateOne({ _id: id }, { $set: { title, description, updated_at: Date.now() } })
        if (!updateDocument) {
            return res.json({ success: false, message: "Error Updating Document" })
        }
        return res.json({ success: true, message: "Document Updated Successfully", content })
    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: "Something went wrong. Try Again!!!" })
    }
}

module.exports = { getDocument, createDocument, updateDocument }