// backend/app.js
const express = require('express');
const app = express();

// Import the function for processing pipeline results
const { processPipelineResults } = require('./controllers/pipelines');

// Endpoint to fetch pipeline results
app.get('/api/pipeline-results', async (req, res) => {
  try {
    // Fetch pipeline results from external source
    const pipelineResults = await fetchPipelineResults();

    // Process the fetched data using the imported function
    const processedResults = processPipelineResults(pipelineResults);

    // Send the processed data as JSON response
    res.json(processedResults);
  } catch (error) {
    // Handle errors
    console.error('Error fetching pipeline results:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
