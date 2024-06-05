// backend/controllers/pipelines.js
// Controller function to handle pipeline requests
exports.getPipelineResults = (req, res) => {
    // Logic to fetch pipeline results from Jenkins or database
    const pipelineResults = [
      { id: 1, name: 'Pipeline 1', status: 'Success' },
      { id: 2, name: 'Pipeline 2', status: 'Failed' }
    ];
    res.json(pipelineResults);
  };
  