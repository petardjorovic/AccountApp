const express = require('express');
const homeCtrl = require('../controllers/HomeCtrl');
const profileCtrl = require('../controllers/ProfileCtrl');

const router = express.Router();

router.get('/', homeCtrl.index);

router.get('/profile/:account_id', profileCtrl.index);

router.get('/profile/:id/delete', profileCtrl.deleteAccount);


module.exports = router;