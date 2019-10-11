const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

var VueCtrl = require('../controllers');

router.get('/contacts', VueCtrl.ContactController.index);
router.post('/contacts', VueCtrl.ContactController.store);
router.get('/contacts/:id', VueCtrl.ContactController.edit);
router.put('/contacts/:id', VueCtrl.ContactController.update);
router.delete('/contacts/:id', VueCtrl.ContactController.destroy);

module.exports = router;