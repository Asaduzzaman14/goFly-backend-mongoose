const express = require('express');
const router = express.Router()
const flightRoutesController = require('../controller/flightRoutesController');


router.route('/')
    .get(flightRoutesController.getFlights)
    .post(flightRoutesController.createFlight)

router.route('/:id')
    .patch(flightRoutesController.updateFlight)
    .delete(flightRoutesController.deleteFlight)



module.exports = router;