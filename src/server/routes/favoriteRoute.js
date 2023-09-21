const express = require('express');
const router = express.Router();

const { newReview } = require('../controller/favoriteController');

router.post('/newreview', newReview);

module.exports = router;
