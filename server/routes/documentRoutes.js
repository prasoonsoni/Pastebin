const express = require('express')
const router = express.Router()
const documentController = require('../controllers/documentController')

router.post('/create', documentController.createDocument)
router.put('/update/:id', documentController.updateDocument)

module.exports = router