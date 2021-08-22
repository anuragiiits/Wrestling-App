var express = require('express');
var router = express.Router();

const eventMethods = require('../controllers/event.controller');

/* GET home page. */
router.get('/', eventMethods.homePage);

router.get('/events/:eventId', eventMethods.eventPage);

module.exports = router;
