const Document = require('../models/Document')

const createDocument = async (req, res) => {
    try {
        const { title, description } = req.body
        const content = await Document.create({ title, description })
        if (!content) {
            return res.json({ success: false, message: "Error Creating Document" })
        }
        return res.json({ success: true, message: "Document Created Successfully", content })
    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: "Something went wrong. Try Again!!!" })
    }
}

module.exports = { createDocument }