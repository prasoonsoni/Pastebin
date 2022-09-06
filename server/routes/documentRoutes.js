const express = require('express')
const router = express.Router()
const documentController = require('../controllers/documentController')

router.post('/verify/:id', documentController.verifyPassword)
router.post('/create', documentController.createDocument)
router.put('/update/:id', documentController.updateDocument)
router.get('/get/:id', documentController.getDocument)

module.exports = router