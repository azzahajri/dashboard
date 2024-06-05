// backend/routes/pipelines.js
const express = require('express');
const router = express.Router();

// Controller function to handle pipeline requests
const { getPipelineResults } = require('../controllers/pipelines');

router.get('/', getPipelineResults);

module.exports = router;
