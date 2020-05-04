const express = require('express');
const router = express.Router();

// Load Spot model
const Spot = require('../../models/Spot');

// @route GET api/spots/test
// @description test spots route
// @access Public
router.get('/test', (req, res) => res.send('spot route testing...'));

// @route GET api/spots
// @description Get all spots
// @access Public
router.get('/', (req, res) => {
	Spot.find().then((spots = res.json(spots))).catch((err) => res.status(404).json({ nospotsfound: 'No Spots Found' }));
});

// @route GET api/spots/:id
// @description Get single spot by id
// @access Public
router.get('/:id', (req, res) => {
	Spot.findById(req.params.id)
		.then((spot) => res.json(spot))
		.catch((err) => res.status(404).json({ nospotsfound: 'No Spots Found' }));
});

// @route GET api/spots
// @description add/save spot
// @access Public
router.post('/', (req, res) => {
	Spot.create(req.body)
		.then((spot) => res.json({ msg: 'Spot added successfully' }))
		.catch((err) => res.status(404).json({ error: 'Unable to add this spot' }));
});

// @route GET api/spots/:id
// @description Update spot
// @access Public
router.put('/:id', (req, res) => {
	Spot.findByIdAndUpdate(req.params.id, req.body)
		.then((spot) => res.json({ msg: 'Updated Successfully' }))
		.catch((err) => res.status(404).json({ error: 'Unable to update the database' }));
});

// @route GET api/spots/:id
// @description Update spot
// @access Public
router.delete('/:id', (req, res) => {
	Spot.findByIdAndRemove(req.params.id, req.body)
		.then((spot = res.json({ msg: 'Spot entry was deleted successfully' })))
		.catch((err) => res.status(404).json({ error: 'No spot found' }));
});

module.exports = router;
