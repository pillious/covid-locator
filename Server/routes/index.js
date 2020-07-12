var express = require('express');
var router = express.Router();

const routing_controller = require('../controllers/indexController');

router.get('/', routing_controller.test);

router.get('/risk/:state/:county', routing_controller.risk);

module.exports = router;
