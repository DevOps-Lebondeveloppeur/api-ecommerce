const router = require('express').Router();
const apiRoutes = require('./api');

const keys = require('../config/keys');
const { apiURL } = keys.app;

const api = `/${apiURL}`;

// Welcome route
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API !' });
});

  
// api routes
router.use(api, apiRoutes);
router.use(api, (req, res) => res.status(404).json('No API route found'));

module.exports = router;
