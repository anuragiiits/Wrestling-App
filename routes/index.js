var express = require('express');
var router = express.Router();

const eventMethods = require('../controllers/event.controller');
const streamMethods = require('../controllers/video.controller');

/* GET home page. */
router.get('/', eventMethods.homePage);

router.get('/events/:eventId', eventMethods.eventPage);

router.get('/watch', streamMethods.streamPage);

module.exports = router;
